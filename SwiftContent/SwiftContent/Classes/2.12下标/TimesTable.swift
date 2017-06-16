//
//  TimesTable.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/16.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit



struct TimesTable {
    let multiplier: Int
    //subscript下标
    subscript(index: Int) -> Int {
        return multiplier * index
    }
    
    

}


//Swift 的Dictionary类型实现下标用于对其实例中储存的值进行存取操作。为字典设值时，在下标中使用和字典的键类型相同的键，并把一个和字典的值类型相同的值赋给这个下标

class subscriptT {
    class func se(){
        var numberOfLegs = ["spider": 8, "ant": 6, "cat": 4]
        //例子通过下标将String类型的键bird和Int类型的值2添加到字典中。
        numberOfLegs["bird"] = 2
        
    }

}
