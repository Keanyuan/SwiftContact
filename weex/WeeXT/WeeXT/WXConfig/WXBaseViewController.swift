//
//  WXBaseViewController.swift
//  WeeXT
//
//  Created by KeanQ on 2018/4/3.
//  Copyright © 2018年 anji-allways. All rights reserved.
//

import UIKit
import WeexSDK
import FDFullscreenPopGesture
import SocketRocket

class WXBaseViewController: UIViewController {
    var instance : WXSDKInstance?
    var weexView = UIView()
    var jsURL : URL?
    var hotReloadSocket: SRWebSocket!
    // Weex渲染完成发送的参数-带默认值
    var renderFinishParams = ""
    override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
        super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
    }
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
    }
    
    /// 初始化方法 - For Weex
    ///
    /// * url:      跳转的weex页面js文件地址
    /// * options:  一些初始化设置集合，如:title
    init(url: String, options: [String: Any]) {
        super.init(nibName: nil, bundle: nil)
        self.title = options["title"] as? String
        self.jsURL = URL(string: url)
    }
    
    /// 初始化方法
    ///
    /// * url:      跳转的weex页面js文件地址
    /// * title:    页面导航栏的标题
    init(url: String,title: String) {
        super.init(nibName: nil, bundle: nil)
        self.title = title
        self.jsURL = URL(string: url)
    }
    init(url: String,title: String, renderFinishParams: String) {
        super.init(nibName: nil, bundle: nil)
        self.title = title
        self.jsURL = URL(string: url)
        self.renderFinishParams = renderFinishParams
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.view.backgroundColor = UIColor.white
        self.fd_prefersNavigationBarHidden = true
        let hotReloadURL =  "ws://\((self.jsURL?.host) ?? ""):8080"
        if (hotReloadURL.count>0){
            hotReloadSocket = SRWebSocket(url: URL(string: hotReloadURL))
            hotReloadSocket.delegate = self
            hotReloadSocket.open()
        }
        
        // 加载Weex页面
        render()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        updateInstanceState(to: .WeexInstanceAppear)
    }
    
    override func viewDidDisappear(_ animated: Bool) {
        super.viewDidDisappear(animated)
        updateInstanceState(to: .WeexInstanceDisappear)
    }
    
    func render() {
        guard jsURL != nil else {
            print("jsURL is nil")
            return
        }
        instance?.destroy()
        instance = WXSDKInstance()
        instance?.viewController = self
        instance?.frame = CGRect(origin: .zero, size: view.bounds.size)
        
        //创建回调
        instance?.onCreate = { [unowned self] view in
            guard let v = view else { return }
            self.weexView.removeFromSuperview()
            self.weexView = v
            self.view.addSubview(self.weexView)
            self.view.sendSubview(toBack: self.weexView)
            UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, v)
        }
        
        //失败回调
        instance?.onFailed = { [weak self] error in
            print("instance failed:\(error?.localizedDescription ?? "") \(String(describing: self))")
        }
        
        //完成回调
        instance?.renderFinish = { [weak self] view in
            print("instance render finish")
            self?.updateInstanceState(to: .WeexInstanceAppear)
        }
        
        //更新完成回调
        instance?.updateFinish = { view in
            print("instance update finish")
        }
        
        // JS Bundle文件下载完成回调，在这里储存到本地
        instance?.onJSDownloadedFinish = { [weak self] response, request, data, error in
            print("\(self?.instance)")
        }
        
        instance?.render(with: jsURL, options: ["bundleUrl": jsURL?.absoluteString], data: nil)
    }
    
    //更新实例状态
    func updateInstanceState(to newState: WXState) {
        guard instance?.state != newState else { return }
        instance?.state = newState
        switch newState {
        case .WeexInstanceAppear:
            WXSDKManager.bridgeMgr().fireEvent(instance?.instanceId, ref: WX_SDK_ROOT_REF, type: "viewappear", params: nil, domChanges: nil)
        case .WeexInstanceDisappear:
            WXSDKManager.bridgeMgr().fireEvent(instance?.instanceId, ref: WX_SDK_ROOT_REF, type: "viewdisappear", params: nil, domChanges: nil)
        default:
            break
        }
    }
    
    //注销instance
    deinit {
        instance?.destroy()
    }
    
    
    
}

extension WXBaseViewController: SRWebSocketDelegate{
    func webSocket(_ webSocket: SRWebSocket!, didReceiveMessage message: Any!) {
        print("didReceiveMessage")
        render()
    }
    
//    - (void)webSocket:(SRWebSocket *)webSocket didReceivePong:(NSData *)pongPayload;
    func webSocket(_ webSocket: SRWebSocket!, didReceivePong pongPayload: Data!) {
        print("pongPayload")

        render()
    }
    func webSocket(_ webSocket: SRWebSocket!, didFailWithError error: Error!) {
        print("fail")
    }
    func webSocketDidOpen(_ webSocket: SRWebSocket!) {
        print("webSocketDidOpen")
    }
    
    func webSocket(_ webSocket: SRWebSocket!, didCloseWithCode code: Int, reason: String!, wasClean: Bool) {
        print("wasClean")
    }

}

extension UIViewController {
    class func currentViewController(base: UIViewController? = UIApplication.shared.keyWindow?.rootViewController) -> UIViewController? {
        if let nav = base as? UINavigationController {
            return currentViewController(base: nav.visibleViewController)
        }
        if let tab = base as? UITabBarController {
            return currentViewController(base: tab.selectedViewController)
        }
        if let presented = base?.presentedViewController {
            return currentViewController(base: presented)
        }
        return base
    }
}
