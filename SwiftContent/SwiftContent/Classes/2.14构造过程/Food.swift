//
//  Food.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/19.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class Food {
    var name: String
    //指定构造器
    init(name: String) {
        self.name = name
    }
    
    //便利构造器
    convenience init(){
        //通过横向代理到指定构造器init(name: String)并给参数name传值[Unnamed]来实现：
        self.init(name: "[Unnamed]")
    }
    
}
