//
//  WXImageLoader.swift
//  SwiftWeex
//
//  Created by 李家斌 on 2018/2/7.
//  Copyright © 2018年 lijiabin. All rights reserved.
//

import UIKit
import WeexSDK
import SDWebImage
import Kingfisher
class WXImageLoader: NSObject, WXImgLoaderProtocol {
    
    func downloadImage(withURL url: String!, imageFrame: CGRect, userInfo options: [AnyHashable : Any]! = [:], completed completedBlock: ((UIImage?, Error?, Bool) -> Void)!) -> WXImageOperationProtocol! {
        print("weex加载图片:", url)
        guard let url = url else {
            print("weex传入的图片URL无效")
            return nil
        }
        let fullURL = url.hasPrefix("//")  ?  ("http:" + url)  :  url
        guard let validURL = URL(string: fullURL) else {
            print("weex图片URL无效：", fullURL)
            return nil
        }
        
        let downloadTask = SDWebImageManager.shared().downloadImage(with: validURL, options: .retryFailed, progress: nil) { (image, error, cacheType, finished, imageURL) in
            completedBlock?(image, error, finished)
        }
        
        return downloadTask as? WXImageOperationProtocol
    }
    
}
