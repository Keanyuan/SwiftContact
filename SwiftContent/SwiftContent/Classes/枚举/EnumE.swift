//
//  EnumE.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/16.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

enum CompassPoint {
    case north
    case south
    case east
    case west
}
//与 C 和 Objective-C 不同，Swift 的枚举成员在被创建时不会被赋予一个默认的整型值。在上面的CompassPoint例子中，north，south，east和west不会被隐式地赋值为0，1，2和3。相反，这些枚举成员本身就是完备的值，这些值的类型是已经明确定义好的CompassPoint类型。




//多个成员值可以出现在同一行上，用逗号隔开：
//在使用原始值为整数或者字符串类型的枚举时，不需要显式地为每一个枚举成员设置原始值，Swift 将会自动为你赋值。
//Plant.mercury的显式原始值为1，Planet.venus的隐式原始值为2，依次类推。
enum Planet: Int {
    case mercury = 1, venus, earth, mars, jupiter, saturn, uranus, neptune
}

enum Barcode {
    case upc(Int, Int, Int, Int)
    case qrCode(String)
}


//原始值 
//作为关联值的替代选择，枚举成员可以被默认值（称为原始值）预填充，这些原始值的类型必须相同。
//原始值可以是字符串，字符，或者任意整型值或浮点型值。每个原始值在枚举声明中必须是唯一的。
enum ASCIIControlCharacter: Character {
    case tab = "\t"
    case lineFeed = "\n"
    case carriageReturn = "\r"
}

//递归枚举是一种枚举类型，它有一个或多个枚举成员使用该枚举类型的实例作为关联值。使用递归枚举时，编译器会插入一个间接层。你可以在枚举成员前加上indirect来表示该成员可递归。
/*
 enum ArithmeticExpression {
 case number(Int)
 indirect case addition(ArithmeticExpression, ArithmeticExpression)
 indirect case multiplication(ArithmeticExpression, ArithmeticExpression)
 }
 */
//你也可以在枚举类型开头加上indirect关键字来表明它的所有成员都是可递归的：
indirect enum ArithmeticExpression {
    case number(Int)
    case addition(ArithmeticExpression, ArithmeticExpression)
    case multiplication(ArithmeticExpression, ArithmeticExpression)
}


//枚举的可变方法可以把self设置为同一枚举类型中不同的成员：
enum TriStateSwitch {
    case Off, Low, High
    mutating func next(){
        switch self {
        case .Off:
            self = .Low
        case .Low:
            self = .High
        case .High:
            self = .Off
        }
    }
}


class EnumE: NSObject {
    public class func setEnumE() {
        var directionToHead = CompassPoint.west
        directionToHead = .east
        
        directionToHead = .south
        switch directionToHead {
        case .north:
            print("Lots of planets have a north")
        case .south:
            print("Watch out for penguins")
        case .east:
            print("Where the sun rises")
        case .west:
            print("Where the skies are blue")
        }
        
        
        let somePlanet = Planet.earth
        switch somePlanet {
        case .earth:
            print("Mostly harmless")
        default:
            print("Not a safe place for humans")
        }
        
        
        var productBarcode = Barcode.upc(8, 85909, 51226, 3)
        
//        productBarcode = .qrCode("ABCDEFGHIJKLMNOP")
        
        switch productBarcode {
        case let .upc(numberSystem, manufacturer, product, check):
            print("UPC: \(numberSystem), \(manufacturer), \(product), \(check).")
        case let .qrCode(productCode):
            print("QR code: \(productCode).")
        }

        let earthsOrder = Planet.earth.rawValue
        // earthsOrder 值为 3
        print(earthsOrder)
        
        let possiblePlanet = Planet(rawValue: 7)
        print(possiblePlanet)
        
        
        let positionToFind = 3
        if let somePlanet = Planet(rawValue: positionToFind) {
            switch somePlanet {
            case .earth:
                print("Mostly harmless")
            default:
                print("Not a safe place for humans")
            }
        } else {
            print("There isn't a planet at position \(positionToFind)")
        }
        
        
       // 表达式(5 + 4) * 2
        //使用递归函数 对算术表达式求值的函数：
        let five = ArithmeticExpression.number(5)
        let four = ArithmeticExpression.number(4)
        let sum = ArithmeticExpression.addition(five, four)
        let product = ArithmeticExpression.multiplication(sum, ArithmeticExpression.number(2))
        
        func evaluate(_ expression: ArithmeticExpression) -> Int {
            switch expression {
            case let .number(value):
                return value
            case let .addition(left, right):
                return evaluate(left) + evaluate(right)
            case let .multiplication(left, right):
                return evaluate(left) * evaluate(right)
            }
        }
        
        print(evaluate(product))
        
        //下面的例子中定义了一个三态开关的枚举。每次调用next()方法时，开关在不同的电源状态（Off，Low，High）之间循环切换。
        var ovenLight = TriStateSwitch.Low
        ovenLight.next()
        // ovenLight 现在等于 .High
        ovenLight.next()
        // ovenLight 现在等于 .Off


    }

}
