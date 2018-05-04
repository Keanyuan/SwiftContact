//
//  MyWXTestViewController.swift
//  WeeXT
//
//  Created by KeanQ on 2018/4/9.
//  Copyright © 2018年 anji-allways. All rights reserved.
//

import UIKit

class MyWXTestViewController: WXBaseViewController {
    
    var productId = ""
    var titleImg : UIImage?
    
    override init(url: String, title: String, renderFinishParams: String) {
        super.init(url: url, title: title, renderFinishParams: renderFinishParams)
    }
    override init(url: String, title: String) {
        
        super.init(url: url, title: title)
        
    }
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        self.view.backgroundColor = UIColor.white
//        self.navigationController?.navigationBar.isTranslucent = false
        //设置UICollectionView不自动下移64
//        if #available(iOS 11.0, *) {
//            contentInsetAdjustmentBehavior = .never
//        } else {
//            automaticallyAdjustsScrollViewInsets = false;
//        }
        // 加载Weex页面
        render()
        let button = UIButton()
        button.frame = CGRect(x: SCREENW/2.0, y: 200, width: 60, height: 40)
        button.setTitle("刷新", for: .normal)
        button.setTitleColor(UIColor.red, for: .normal)
        button.addTarget(self, action: #selector(popClick), for: .touchUpInside)
        self.view.addSubview(button)
        
        
    }
    @objc func popClick(){
        self.render()
    }
    override func render() {
        guard jsURL != nil else {
            print("jsURL is nil")
            return
        }
        instance?.destroy()
        instance = WXSDKInstance()
        instance?.viewController = self
        instance?.frame = CGRect(x: 0, y: 0, width: self.view.bounds.width, height: self.view.bounds.height)
        print(self.view.frame)
        
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
            self?.instance?.fireGlobalEvent("downLoadedFinish", params: ["info": self?.renderFinishParams ?? "{}"])
        }
        
        //更新完成回调
        instance?.updateFinish = { view in
            print("instance update finish")
        }
        
        // JS Bundle文件下载完成回调，在这里储存到本地
        instance?.onJSDownloadedFinish = { [weak self] response, request, data, error in
            self?.updateInstanceState(to: .WeexInstanceAppear)
            self?.instance?.fireGlobalEvent("downLoadedFinish", params: ["info": self?.renderFinishParams ?? "{}"])
        }
        
        instance?.render(with: jsURL, options: ["bundleUrl": jsURL?.absoluteString ?? ""], data: nil)
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        updateInstanceState(to: .WeexInstanceAppear)
    }
    
    override func viewDidDisappear(_ animated: Bool) {
        super.viewDidDisappear(animated)
        updateInstanceState(to: .WeexInstanceDisappear)
    }
}
