//
//  ViewController.swift
//  WeeXT
//
//  Created by KeanQ on 2018/4/3.
//  Copyright © 2018年 anji-allways. All rights reserved.
//

import UIKit
let SCREENH = UIScreen.main.bounds.size.height
let SCREENW = UIScreen.main.bounds.size.width
let isIPhone8X = SCREENH == 812 ? true : false
let kStatusBarH : CGFloat = isIPhone8X ? 44 : 20
let kNavigationBarH : CGFloat = 44
//class ViewController: UIViewController {
//    @IBAction func actionClick(_ sender: UIButton) {
//        let urlS = "http://169.254.91.163:8081/dist/components/MyList.js"
//        let vc = MyWXTestViewController(url: urlS, title: "MyList")
//        self.navigationController?.pushViewController(vc, animated: true)
//    }
//    @IBAction func action1Click(_ sender: UIButton) {
//        let urlS = "http://169.254.91.163:8081/dist/components/MyDiv.js"
//        let vc = MyWXTestViewController(url: urlS, title: "DIV")
//        self.navigationController?.pushViewController(vc, animated: true)
//    }
//
//    @IBAction func action2Click(_ sender: UIButton) {
//        let urlS = "http://169.254.91.163:8081/dist/index.js"
//        let vc = MyWXTestViewController(url: urlS, title: "WeexUI")
//        self.navigationController?.pushViewController(vc, animated: true)
//    }
//
//
//    override func viewDidLoad() {
//        super.viewDidLoad()
//        self.title = "首页"
//        let urlS = "http://169.254.91.163:8081/dist/index.js"
//        let vc = MyWXTestViewController(url: urlS, title: "index")
//        self.navigationController?.pushViewController(vc, animated: true)
//    }
//}


class ViewController: WXBaseViewController {
    
    var productId = ""
    var titleImg : UIImage?
    
    override init(url: String, title: String) {
        let urlS = "http://169.254.91.163:8081/dist/index.js"
        let titlea = "index"
        super.init(url: urlS, title: titlea)
        
    }
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        self.view.backgroundColor = UIColor.white
        let jsURLs = "http://192.168.214.118:8081/dist/index.js"
        self.jsURL = URL(string: jsURLs)

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
        button.frame = CGRect(x: SCREENW - 60, y: 20, width: 60, height: 40)
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
            self?.instance?.fireGlobalEvent("downLoadedFinish", params: ["key1":"value1","key2":"value2"])
        }
        
        //更新完成回调
        instance?.updateFinish = { view in
            print("instance update finish")
        }
        
        // JS Bundle文件下载完成回调，在这里储存到本地
        instance?.onJSDownloadedFinish = { [weak self] response, request, data, error in
            print("\(String(describing: self?.instance))")
        }
        
        instance?.render(with: jsURL, options: ["bundleUrl": jsURL?.absoluteString ?? ""], data: nil)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        self.navigationController?.isNavigationBarHidden = true

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
