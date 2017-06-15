//
//  SimpleStructure.swift
//  NE
//
//  Created by 祁志远 on 2017/6/13.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

//SimpleStructure时候mutating关键字用来标记一个会修改结构体的方法。
//SimpleClass的声明不需要标记任何方法，因为类中的方法通常可以修改类属性（类的性质）。
struct SimpleStructure: ExampleProtocol {
    var simpleDescription: String = "A simple structure"
    mutating func adjust() {
        simpleDescription += " (adjusted)"
    }
    
    var fridgeIsOpen = false
    let fridgeContent = ["milk", "eggs", "leftovers"]
    
    mutating func fridgeContains(_ food: String) -> Bool {
        fridgeIsOpen = true
        //使用defer代码块来表示在函数返回前，函数中最后执行的代码。无论函数是否会抛出错误，这段代码都将执行。
        defer {
            fridgeIsOpen = false
        }
        
        let result = fridgeContent.contains(food)
        return result
    }
    
    public static func setSimpleStructure(){
        var b = SimpleStructure()
        b.adjust()
        let bDescription = b.simpleDescription
        print(bDescription)
        
        b.fridgeContains("banana")

        print(b.fridgeIsOpen)
        
    }
}

