//
//  RecipeIngredient.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/19.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class RecipeIngredient: Food {
    var quantity : Int
    //指定构造器   指定构造器必须总是向上代理
    init(name: String, quantity: Int) {
        self.quantity = quantity
        super.init(name: name)
    }
    
    //RecipeIngredient会自动继承父类的所有便利构造器

    
    //便利构造器 便利构造器必须总是横向代理
    //由于这个便利构造器重写了父类的指定构造器init(name: String)，因此必须在前面使用override修饰符
    override convenience init(name: String) {
        self.init(name: name, quantity: 1)
    }
    
}
