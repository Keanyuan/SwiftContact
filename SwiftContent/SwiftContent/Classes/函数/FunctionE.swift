//
//  FunctionE.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/16.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class FunctionE: NSObject {
    public class func setFunctionEE() {
        
        //可以用元组（tuple）类型让多个值作为一个复合值从函数中返回。
        func minMax(array: [Int]) -> (min: Int, max: Int)? {
            if array.isEmpty { return nil }
            var currentMin = array[0]
            var currentMax = array[0]
            for value in array[1..<array.count] {
                if value < currentMin {
                    currentMin = value
                } else if value > currentMax {
                    currentMax = value
                }
            }
            return (currentMin, currentMax)
        }
        //元组的成员值已被命名，因此可以通过 . 语法来检索找到的最小值与最大值
        //只有有值才能进入闭包进行输出
        if let bounds = minMax(array: []) {
            print("min is \(bounds.min) and max is \(bounds.max)")
        }
        //注意 可选元组类型如 (Int, Int)? 与元组包含可选类型如 (Int?, Int?) 是不同的.可选的元组类型，整个元组是可选的，而不只是元组中的每个元素值。
        
        
        //每个函数参数都有一个参数标签( argument label )以及一个参数名称( parameter name )。参数标签在调用函数的时候使用；调用的时候需要将函数的参数标签写在对应的参数前面。参数名称在函数的实现中使用。
        
       // 可以在函数名称前指定它的参数标签
        
        //func  方法名（参数标签 参数名称：变量类型）{
//    }
        func someFunction(argumentLabel parameterName: Int) {
            // 在函数体内，parameterName 代表参数值
        }

        func greet(person: String, from hometown: String) -> String {
            return "Hello \(person)!  Glad you could visit from \(hometown)."
        }
        print(greet(person: "Bill", from: "Cupertino"))

        
        //如果你不希望为某个参数添加一个标签，可以使用一个下划线(_)来代替一个明确的参数标签。
        func someFunction1(_ firstParameterName: Int, secondParameterName: Int) {
            // 在函数体内，firstParameterName 和 secondParameterName 代表参数中的第一个和第二个参数值
        }
        print(someFunction1(1, secondParameterName: 2))
        
        //默认参数值
        //可以在函数体中通过给参数赋值来为任意一个参数定义默认值（Deafult Value）。当默认值被定义后，调用这个函数时可以忽略这个参数。
        func someFunction(parameterWithoutDefault: Int, parameterWithDefault: Int = 12) {
            // 如果你在调用时候不传第二个参数，parameterWithDefault 会值为 12 传入到函数体中。
        }
        someFunction(parameterWithoutDefault: 3, parameterWithDefault: 6) // parameterWithDefault = 6
        someFunction(parameterWithoutDefault: 4) // p
        
        //-----------------------
        //一个可变参数（variadic parameter）可以接受零个或多个值。
        //通过在变量类型名后面加入（...）的方式来定义可变参数。
        //可变参数的传入值在函数体中变为此类型的一个数组
        
        func arithmeticMean(_ numbers: Double...)-> Double {
            var total : Double = 0
            for number in numbers {
                total += number
            }
            return total / Double(numbers.count)
        }
        
        print(arithmeticMean(1,2,3,4))
        
        
        
        //-------------------------
        //输入输出参数(inout)
        //你只能传递变量给输入输出参数。你不能传入常量或者字面量，因为这些量是不能被修改的。当传入的参数作为输入输出参数时，需要在参数名前加 & 符，表示这个值可以被函数修改。
        func swapTwoInts(_ a: inout Int, _ b: inout Int) {
            let temporaryA = a
            a = b
            b = temporaryA
        }
        var someInt = 3
        var anotherInt = 107
        print("someInt \(someInt)" + " anotherInt \(anotherInt)")
        swapTwoInts(&someInt, &anotherInt)
        print("someInt \(someInt)" + " anotherInt \(anotherInt)")
        
        //----------------------
        func printMathResult(_ mathFunction: (Int, Int) -> Int, _ a: Int, _ b: Int) {
            print("Result: \(mathFunction(a, b))")
        }
        
        func mathFunc(_ a: Int, _ b: Int) -> Int {
            return a + b
        }
        
        printMathResult(mathFunc, 2, 3)

        //----------函数类型作为返回类型------------
        
        func stepForward(_ input: Int) -> Int {
            return input + 1
        }
        func stepBackward(_ input: Int) -> Int {
            return input - 1
        }
        
        func chooserStepFunc(backward: Bool) -> (Int) -> Int {
            return backward ? stepBackward : stepForward
        }
        
        var currentValue = 3
        let moveNearerToZero = chooserStepFunc(backward: currentValue > 0)
        print(moveNearerToZero(currentValue))
        
        print("Counting to zero:")
        // Counting to zero:
        while currentValue != 0 {
            print("\(currentValue)... ")
            currentValue = moveNearerToZero(currentValue)
        }
        print("zero!")
        
        
        //----------------------------
        
        //嵌套函数 把函数定义在别的函数体中，称作 嵌套函数
        
        func chooseSetpFunc(backward: Bool) -> (Int) -> Int {
            func stepForwarda(input: Int) -> Int{return input + 1}
            func setBackwarda(input : Int) -> Int{return input - 1 }
            return backward ? setBackwarda : stepForwarda
        }
        
        var currentValue1 = -4
        let moveNearerToZero1 = chooseSetpFunc(backward: currentValue1 > 0)
        while currentValue1 != 0 {
            print("\(currentValue1)... ")
            currentValue1 = moveNearerToZero1(currentValue1)
        }
        print("zero!")


    }

    
}
