//
//  Resolution.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/16.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

struct Resolution {
    var width = 0
    var height = 0

}


struct Point {
    var x = 0.0, y = 0.0
    mutating func moveBy(x deltaX: Double, y deltaY: Double){
        self = Point(x: x + deltaX, y: y + deltaY)
    }
}

struct Size {
    var width = 0.0, height = 0.0
}

struct Rect {
    var origin = Point()
    var size = Size()
    var center: Point {
        get {
            let centerX = origin.x + (size.width / 2)
            let centerY = origin.y + (size.height / 2)
            return Point(x: centerX, y: centerY)
        }
        set(newCenter) {
            origin.x = newCenter.x - (size.width / 2)
            origin.y = newCenter.y - (size.height / 2)
        }
    }
}


struct Cuboid {
    var width = 0.0, height = 0.0, depth = 0.0
    var volume: Double {
        return width * height * depth
    }
}

class VideoMode {
    //所有结构体都有一个自动生成的成员逐一构造器，用于初始化新结构体实例中成员的属性。新实例中各个属性的初始值可以通过属性的名称传递到成员逐一构造器之中：
    var resolution = Resolution(width: 640, height: 480)
    var interlaced = false
    var frameRate = 0.0
    var name: String?
    //必须将延迟存储属性声明成变量（使用 var 关键字），因为属性的初始值可能在实例构造完成之后才会得到。而常量属性在构造过程完成之前必须要有初始值，因此无法声明成延迟属性。
    lazy var importer = Resolution()
    //与结构体不同，类实例没有默认的成员逐一构造器
    
    
//    let fourByFiveByTwo = Cuboid(width: 4.0, height: 5.0, depth: 2.0)
//    print("the volume of fourByFiveByTwo is \(fourByFiveByTwo.volume)")
}




class StepCounter {
    var totalSteps: Int = 0 {
        willSet(newTotalSteps) {
            print("About to set totalSteps to \(newTotalSteps)")
        }
        didSet {
            if totalSteps > oldValue  {
                print("Added \(totalSteps - oldValue) steps")
            }
        }
    }
}



