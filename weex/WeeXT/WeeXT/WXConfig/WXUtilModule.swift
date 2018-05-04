//
//  WXUtilModule.swift
//  WeeXT
//
//  Created by KeanQ on 2018/4/3.
//  Copyright © 2018年 anji-allways. All rights reserved.
//

import Foundation
import HandyJSON

public extension WXUtilModule {
    
    @objc public func printSome(_ someThing : String, _ finishedCallback: @escaping (_ resultCode : String) -> ()) {
        print(someThing)
        finishedCallback(someThing)
    }
    
    // 获取接口基础URL
    @objc public func getNativeUrl() -> String {
        
        return "http://prod-elb-cts-285781536.cn-north-1.elb.amazonaws.com.cn/apiuat/"
    }
    @objc public func getNativeDataUrl() -> String {
        
        return "http://prod-elb-cts-285781536.cn-north-1.elb.amazonaws.com.cn/"
    }
    @objc public func openURLStr(_ url: String, _ title: String,_ renderFinishParams: String,  _ finishedCallback: @escaping (_ resultCode : String) -> ()){
        print("url\(url)")
        // 判断是否有配置跳转页面值
        guard url != "" else {
            finishedCallback("敬请期待")
            return
        }
        
        // 判断是否跳转网页
        guard url.hasPrefix("http") || url.hasPrefix("www") else {
            finishedCallback("敬请期待")
            return
        }
        print("renderFinishParams---> \(renderFinishParams)")
        let vc = MyWXTestViewController(url: url, title: title, renderFinishParams: renderFinishParams)
        UIViewController.currentViewController()?.navigationController?.pushViewController(vc, animated: true)
    }
    
    // 获取请求体
    @objc func getRequestBody(_ params : String?) -> String{
        let token = "20_3c78c0b7cd5c4096996cbbdf2ce825b5"
        let time =  String(Int64(Date().timeIntervalSince1970 * 1000))
        let sign = getSignForWeex(reqDataString: params ?? "", timeStr: time, tokenStr: token)
        
        let requestBody = RequestBodyModel()
        requestBody.token = token
        requestBody.sign = sign
        requestBody.time = time
        requestBody.reqData = params ?? ""
        //        let param: [String: Any] = [
        //            "platformType" : "2",
        //            "token" : token,
        //            "sign" : sign,
        //            "time" : time,
        //            "reqData" : params ?? ["" : ""]
        //        ]
        
        return requestBody.toJSONString()!
    }
    
    
    // 打电话
    @objc func call(_ phoneNumber : String) {
        guard let url = URL(string: "tel:" + phoneNumber) else {
            print("号码\(phoneNumber)不正确！")
            return
        }
        if #available(iOS 10.0, *) {
            UIApplication.shared.open(url)
        } else {
            UIApplication.shared.openURL(url)
        }
    }
    
    // 多个电话选择
    @objc func calls(_ phoneNumbers : Array<String>) {
        // 1 实例化
        let alertSheet = UIAlertController(title: nil, message: nil, preferredStyle: UIAlertControllerStyle.actionSheet)
        // 2 命令（样式：退出Cancel，警告Destructive-按钮标题为红色，默认Default）
        let cancelAction = UIAlertAction(title: "取消", style: UIAlertActionStyle.cancel, handler: nil)
        alertSheet.addAction(cancelAction)
        for phoneNumber in phoneNumbers {
            let numberAction = UIAlertAction(title: phoneNumber, style: UIAlertActionStyle.default, handler: {
                action in
                self.call(phoneNumber)
            })
            alertSheet.addAction(numberAction)
        }
        // 3 跳转
        UIViewController.currentViewController()?.present(alertSheet, animated: true, completion: nil)
    }
}
