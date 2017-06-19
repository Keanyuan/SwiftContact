//
//  Vehicle.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/19.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class Vehicle {
    var currentSpeed = 0.0
    var  numberOfWheels = 0
    
    var description: String {
        return "traveling at \(currentSpeed) miles per hour, numberOfWheels: \(numberOfWheels) wheels"
    }
    
    func makeNoise(){
        // 什么也不做-因为车辆不一定会有噪音
        printLog("Vehicle.makeNoise")
    }
}

/*
 你可以通过把方法，属性或下标标记为final来防止它们被重写，只需要在声明关键字前加上final修饰符即可（例如：final var，final func，final class func，以及final subscript）。
 
 如果你重写了带有final标记的方法，属性或下标，在编译时会报错。在类扩展中的方法，属性或下标也可以在扩展的定义里标记为 final 的。
 
 你可以通过在关键字class前添加final修饰符（final class）来将整个类标记为 final 的。这样的类是不可被继承的，试图继承这样的类会导致编译报错。
 */
