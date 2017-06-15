//
//  DictionaryE.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/15.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class DictionaryE: NSObject {
    public class func setDictionaryE() {
        var namesOfIntegers = [Int: String]()
        namesOfIntegers[16] = "sixteen"
        // namesOfIntegers 现在包含一个键值对
        print(namesOfIntegers)
        
        namesOfIntegers = [:]
        // namesOfIntegers 又成为了一个 [Int: String] 类型的空字典
        print(namesOfIntegers)

        var airports = ["YYZ": "Toronto Pearson", "DUB": "Dublin"]
        print(airports)
        print("The dictionary of airports contains \(airports.count) items.")
        if airports.isEmpty {
            print("The airports dictionary is empty.")
        } else {
            print("The airports dictionary is not empty.")
        }
        
        airports["LHR"] = "London"
        // airports 字典现在有三个数据项
        print(airports)

        airports["LHR"] = "London Heathrow"
        // "LHR"对应的值 被改为 "London Heathrow
        print(airports)

        //字典的updateValue(_:forKey:)方法可以设置或者更新特定键对应的值
        if let oldValue = airports.updateValue("Dublin Airport", forKey: "DUB") {
            print("The old value for DUB was \(oldValue).")
        }
        
        //可以使用下标语法来在字典中检索特定键对应的值
        if let airportName = airports["DUB"] {
            print("The name of the airport is \(airportName).")
        } else {
            print("That airport is not in the airports dictionary.")
        }
        
        airports["APL"] = "Apple Internation"
        // "Apple Internation" 不是真的 APL 机场, 删除它
        print(airports)

        airports["APL"] = nil
        // APL 现在被移除了
        print(airports)

        //removeValue(forKey:)方法也可以用来在字典中移除键值对'
        if let removedValue = airports.removeValue(forKey: "DUB") {
            print("The removed airport's name is \(removedValue).")
        } else {
            print("The airports dictionary does not contain a value for DUB.")
        }

        //使用for-in循环来遍历某个字典中的键值对
        for (airportCode, airportName) in airports {
            print("\(airportCode): \(airportName)")
        }
        
        //通过访问keys或者values属性，我们也可以遍历字典的键或者值：
        for airportCode in airports.keys {
            print("Airport code: \(airportCode)")
        }
        for airportName in airports.values {
            print("Airport name: \(airportName)")
        }
        
        //如果我们只是需要使用某个字典的键集合或者值集合来作为某个接受Array实例的 API 的参数，可以直接使用keys或者values属性构造一个新数组：
        let airportCodes = [String](airports.keys)
        print(airportCodes)
        
        let airportNames = [String](airports.values)
        print(airportNames)

    }
}
