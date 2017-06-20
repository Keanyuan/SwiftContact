//
//  Bicycle.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/19.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class Bicycle: Vehicle {
    var hasBasket = false
    var gear = 1
//    override func makeNoise() {
//        printLog("Bicycle.makeNoise")
//        super.makeNoise()
//    }
    //子类可以在初始化时修改继承来的变量属性，但是不能修改继承来的常量属性。
    override init() {
         super.init()
        numberOfWheels = 2
    }
}
