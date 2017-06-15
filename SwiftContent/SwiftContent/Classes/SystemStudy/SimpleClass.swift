//
//  SimpleClass.swift
//  NE
//
//  Created by 祁志远 on 2017/6/13.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit


protocol ExampleProtocol {
    var simpleDescription: String { get }
    mutating func adjust()
}

class SimpleClass: ExampleProtocol {
    var simpleDescription: String = "A very simple class."
    var anotherProperty: Int = 69105
    
    func adjust() {
        simpleDescription += "  Now 100% adjusted."
    }
    
    public static func setSimpleClass(){
        let a = SimpleClass()
        a.adjust()
        let aDescription = a.simpleDescription
        print(aDescription)
    }

}
