//
//  Double+Extension.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/20.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

extension Double {
    var km:Double {return self * 1_000}
    var m : Double { return self }
    var cm: Double { return self / 100.0 }
    var mm: Double { return self / 1_000.0 }
    var ft: Double { return self / 3.28084 }
    
    
}


extension Int {
    func repetitions(task: () -> Void) {
        for _ in 0..<self {
            task()
        }
    }
    
    //通过扩展添加的实例方法也可以修改该实例本身,结构体和枚举类型中修改 self 或其属性的方法必须将该实例方法标注为 mutating，正如来自原始实现的可变方法一样。
    mutating func square() {
        self = self * self
    }
    
    //扩展可以为已有类型添加新下标。
    // Swift 内建类型 Int 添加了一个整型下标。该下标 [n] 返回十进制数字从右向左数的第 n 个数字：
    //如果该 Int 值没有足够的位数，即下标越界，那么上述下标实现会返回 0，犹如在数字左边自动补 0：
    subscript(digitIndex: Int) -> Int {
        var decimalBase = 1
        for _ in 0..<digitIndex {
            decimalBase *= 10
        }
        return (self/decimalBase) % 10
    }
    
    //枚举数子符号
    enum Kind {
        //      -       0       +
        case Negative, Zero, Positive
    }
    var kind: Kind {
        switch self {
        case 0:
            return .Zero
        case let x where x > 0:
            return .Positive
        default:
            return .Negative
        }
    }
    
}
