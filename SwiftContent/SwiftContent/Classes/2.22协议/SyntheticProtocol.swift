//
//  SyntheticProtocol.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/20.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit


//协议合成

//有时候需要同时遵循多个协议，你可以将多个协议采用 SomeProtocol & AnotherProtocol 这样的格式进行组合，称为 协议合成（protocol composition）。你可以罗列任意多个你想要遵循的协议，以与符号(&)分隔。

 protocol Named {
    var name: String {get}
}

protocol Aged {
    var age: Int {get}
    
}

struct Prosition: Named, Aged {
    var name: String
    var age: Int
}

class SyntheticProtocol: NSObject {
    func wishHappyBirthday(to celebrator: Named & Aged) {
        printLog("happy birthday, \(celebrator.name), you're \(celebrator.age)!")
    }
}

//协议和可选要求都必须带上@objc属性。标记 @objc 特性的协议只能被继承自 Objective-C 类的类或者 @objc 类遵循，其他类以及结构体和枚举均不能遵循这种协议。
@objc protocol CounterDataSource {
    //可选
    @objc optional func incrementForCount(count: Int) -> Int
    //必须实现
    func protocolC()
}
