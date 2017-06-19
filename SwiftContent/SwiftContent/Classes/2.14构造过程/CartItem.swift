//
//  CartItem.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/19.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

//定义了一个名为CartItem的Product类的子类。这个类建立了一个在线购物车中的物品的模型，它有一个名为quantity的常量存储型属性，并确保该属性的值至少为1
class CartItem: Product {
    let quantity: Int
    init?(name: String, quantity: Int) {
        if quantity < 1 { return nil }
        self.quantity = quantity
        super.init(name: name)
    }
}
