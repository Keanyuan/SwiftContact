//
//  Product.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/19.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

//Product 的可失败构造器首先检查 name 值，假如 name 值为空字符串，则构造器立即执行失败
class Product {
    let name: String
    init?(name: String) {
        if name.isEmpty { return nil }
        self.name = name
    }
}
