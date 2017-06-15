//
//  IntStack.swift
//  NE
//
//  Created by 祁志远 on 2017/6/13.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

/*
 //非泛型版本的栈
 struct IntStack {
 var items = [Int]()
 
 //入栈
 mutating func push(_ item: Int){
 items.append(item)
 }
 
 //出栈
 mutating func pop() -> Int {
 return items.removeLast()
 }
 
 }
 */
//泛型版本的栈
struct IntStack<Element> {
    var items = [Element]()
    
    //入栈
    mutating func push(_ item: Element){
        items.append(item)
    }
    
    //出栈
    mutating func pop() -> Element {
        return items.removeLast()
    }
    
}

//IntStack 扩展 栈顶元素
extension IntStack {
    var topItem: Element? {
        return items.isEmpty ? nil : items[items.count - 1]
    }
}
