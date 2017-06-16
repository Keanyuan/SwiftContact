//
//  ClosureE.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/16.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class ClosureE: NSObject {

    //----------逃逸闭包 @escaping-------------
    //当一个闭包作为参数传到一个函数中，但是这个闭包在函数返回之后才被执行，我们称该闭包从函数中逃逸。当你定义接受闭包作为参数的函数时，你可以在参数名之前标注 @escaping，用来指明这个闭包是允许“逃逸”出这个函数的。
    var completionHanders: [() -> Void] = []
    var x = 10

    func someFunctionWithEscapingClosure(completionHander: @escaping () -> Void){
        completionHanders.append(completionHander)
    }
    
    func someFuncNone(closure:() -> Void){
        closure()
    }
    
    //将一个闭包标记为 @escaping 意味着你必须在闭包中显式地引用 self。比如说，在下面的代码中，传递到 someFunctionWithEscapingClosure(_:) 中的闭包是一个逃逸闭包，这意味着它需要显式地引用 self。相对的，传递到 someFunctionWithNonescapingClosure(_:) 中的闭包是一个非逃逸闭包，这意味着它可以隐式引用 self。
    func doSomething() {
        someFunctionWithEscapingClosure {
            self.x = 100
        }
        
        someFuncNone {
            x = 2000
        }
    }
    
    public class func setClosureE() {
        
        /*
         * 闭包是自包含的函数代码块，可以在代码中被传递和使用
         * 闭包可以捕获和存储其所在上下文中任意常量和变量的引用。被称为包裹常量和变量。
         * Swift 会为你管理在捕获过程中涉及到的所有内存操作。
         * 全局函数是一个有名字但不会捕获任何值的闭包
         * 嵌套函数是一个有名字并可以捕获其封闭函数域内值的闭包
         * 闭包表达式是一个利用轻量级语法所写的可以捕获其上下文中变量或常量值的匿名闭包
         */
        
        //sorted(by:) 方法会返回一个与原数组大小相同，包含同类型元素且元素已正确排序的新数组。
        let names = ["Chris", "Alex", "Ewa", "Barry", "Daniella"]
        
        func backward(_ s1: String, _ s2: String) -> Bool {
            return s1 > s2
        }
        //sorted(by:) 方法接受一个闭包，该闭包函数需要传入与数组元素类型相同的两个值，并返回一个布尔类型值来表明当排序结束后传入的第一个参数排在第二个参数前面还是后面。如果第一个参数值出现在第二个参数值前面，排序闭包函数需要返回true，反之返回false。
        var reversedNames = names.sorted(by: backward)
        print(reversedNames)
        
        
        //以这种方式来编写一个实际上很简单的表达式（a > b)，确实太过繁琐了。对于这个例子来说，利用闭包表达式语法可以更好地构造一个内联排序闭包。
        /*
         闭包表达式语法有如下的一般形式：
         
         { (parameters) -> returnType in
         statements
         }
         */
        reversedNames = names.sorted(by: {(s1: String, s2: String) -> Bool in return s1 < s2})
        print(reversedNames)
        
        //因为排序闭包函数是作为 sorted(by:) 方法的参数传入的，Swift 可以推断其参数和返回值的类型。sorted(by:) 方法被一个字符串数组调用，因此其参数必须是 (String, String) -> Bool 类型的函数。这意味着 (String, String) 和 Bool 类型并不需要作为闭包表达式定义的一部分。因为所有的类型都可以被正确推断，返回箭头（->）和围绕在参数周围的括号也可以被省略
        reversedNames = names.sorted(by: { (s1, s2) -> Bool in
            s1 > s2
        })
        print(reversedNames)
        
        //参数名称缩写
        //Swift 自动为内联闭包提供了参数名称缩写功能，你可以直接通过 $0，$1，$2 来顺序调用闭包的参数，以此类推。
        reversedNames = names.sorted(by: {$0 < $1})
        print(reversedNames)

        //运算符方法
        //式。Swift 的 String 类型定义了关于大于号（>）的字符串实现，其作为一个函数接受两个 String 类型的参数并返回 Bool 类型的值
        reversedNames = names.sorted(by: >)
        print(reversedNames)
        
        //尾随闭包
        func someFuncThatTakesAClosureA(Clouse: () -> Void) {
            // 函数体部分
        }
        //以下是不使用尾随闭包进行函数调用
        someFuncThatTakesAClosureA(Clouse: {
            // 闭包主体部分
        })
        
        // 以下是使用尾随闭包进行函数调用
        someFuncThatTakesAClosureA(){
            // 闭包主体部分
        }
        
        
        reversedNames = names.sorted(){$0 < $1}
        print(reversedNames)
        
        reversedNames = names.sorted{ $0 > $1}
        print(reversedNames)

        //---------------------
        let digitNames = [
            0: "Zero", 1: "One", 2: "Two",   3: "Three", 4: "Four",
            5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine"
        ]
        let numbers = [16, 58, 510]
        
        let strings = numbers.map { (number) -> String in
            var number = number
            var output = ""
            repeat{
                output = digitNames[number % 10]! + output
                number /= 10
            }while number > 0
            
            return output
        }
        print(strings)
        
        func makeIncrementer(forIncerment amout: Int) -> () -> Int {
            var runningTotal = 0
            func incrementer() -> Int {
                runningTotal += amout
                return runningTotal
            }
            return incrementer
        }
        
        let incrementByTen = makeIncrementer(forIncerment: 10)
        
        print(incrementByTen())
        print(incrementByTen())

        //--------------
        let instance = ClosureE()
        instance.doSomething()
        print(instance.x)
        
        instance.completionHanders.first?()
        print(instance.x)
        
       
        var customersInLine = ["Chris", "Alex", "Ewa", "Barry", "Daniella"]
        print(customersInLine.count)
        // 打印出 "5"
        
        let customerProvider = { customersInLine.remove(at: 0) }
        print(customersInLine.count)
        // 打印出 "5"
        
        print("Now serving \(customerProvider())!")
        // Prints "Now serving Chris!"
        print(customersInLine.count)
        
        // 打印出 "4"
        // customersInLine is ["Alex", "Ewa", "Barry", "Daniella"]
//        func serve(customer customerProvider: () -> String) {
//            print("Now serving \(customerProvider())!")
//        }
//        serve(customer: { customersInLine.remove(at: 0) } )
        
        //而是通过将参数标记为 @autoclosure 来接收一个自动闭包。现在你可以将该函数当作接受 String 类型参数（而非闭包）的函数来调用。customerProvider 参数将自动转化为一个闭包，因为该参数被标记了 @autoclosure 特性。
        //注意 过度使用 autoclosures 会让你的代码变得难以理解。上下文和函数名应该能够清晰地表明求值是被延迟执行的。
        // customersInLine is ["Ewa", "Barry", "Daniella"]
        func serve(customer customerProvider: @autoclosure () -> String) {
            print("Now serving \(customerProvider())!")
        }
        serve(customer: customersInLine.remove(at: 0))
        // 打印 "Now serving Ewa!"

        
        
    }
}
