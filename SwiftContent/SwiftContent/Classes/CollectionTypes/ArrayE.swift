//
//  ArrayE.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/15.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class ArrayE: NSObject {
    
    public class func setArrayE() {
        //数组应该遵循像Array<Element>这样的形式，其中Element是这个数组中唯一允许存在的数据类型
        var someInts = [Int]()
        print("someInts is of type [Int] with \(someInts.count) items.")
        //数组添加参数
        
        someInts.append(3)
        someInts.append(4)
        someInts.append(5)
        print("someInts is of type [Int] with \(someInts) items.")

        someInts = []
        // someInts 现在是空数组，但是仍然是 [Int] 类型的。
        print("someInts is of type [Int] with \(someInts) items.")

        var threeDoubles = Array(repeating: 0.0, count: 3)
        // threeDoubles 是一种 [Double] 数组，等价于 [0.0, 0.0, 0.0]
        print("threeDoubles is default type  with \(threeDoubles) ")

        
    }
}
