//
//  LimitE.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/15.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class LimitE: NSObject {
    public class func setLimitE() {
        for index in 1...5 {
            print("\(index) times 5 is \(index * 5)")
        }
        
        
        //如果你不需要区间序列内每一项的值，你可以使用下划线（_）替代变量名来忽略这个值
        let base = 3
        let power = 10
        var answer = 1
        for _ in 1...power {
            answer *= base
        }
        print("\(base) to the power of \(power) is \(answer)")
        
        //使用for-in遍历一个数组所有元素
        let names = ["Anna", "Alex", "Brian", "Jack"]
        for name in names {
            print("Hello, \(name)!")
        }
        
        //在for-in循环字典中使用显式的常量名称来解读(key, value)元组
        let numberOfLegs = ["spider": 8, "ant": 6, "cat": 4]
        for (animalName, legCount) in numberOfLegs {
            print("\(animalName)s have \(legCount) legs")
        }
        
        
        //蛇和梯子（也叫做滑道和梯子）的小游戏
        let finalSquare = 25
        
        var board = [Int](repeating: 0, count: finalSquare + 1)
        //
        board[03] = +08; board[06] = +11; board[09] = +09; board[10] = +02
        board[14] = -10; board[19] = -11; board[22] = -02; board[24] = -08
        print(board)
        
        
        var square = 0
        var diceRoll = 0
        
//        while square < finalSquare {
//            // 掷骰子
////            diceRoll += 1
////            if diceRoll == 7 { diceRoll = 1 }
//            let diceRollNum = Int(arc4random_uniform(6))
//            print("diceRollNum --> \(diceRollNum)")
//
//            // 根据点数移动
//            square += diceRollNum
//            print("square1 --> \(square)")
//
//
//            if square < board.count {
//                // 如果玩家还在棋盘上，顺着梯子爬上去或者顺着蛇滑下去
//                print(board[square])
//                square += board[square]
//            }
//            print("square2 --> \(square)")
//        }
//        print("Game over!")
        
        //while循环的另外一种形式是repeat-while，它和while的区别是在判断循环条件之前，先执行一次循环的代码块。然后重复循环直到条件为false。
        //repeat-while方式会在条件判断square没有超出后直接运行square += board[square]，这种方式可以去掉while版本中的数组越界判断
        repeat {
            print("square1 --> \(square)")
            print(board[square])
            // 顺着梯子爬上去或者顺着蛇滑下去
            square += board[square]
            // 掷骰子
//            diceRoll += 1
//            if diceRoll == 7 { diceRoll = 1 }
            diceRoll = Int(arc4random_uniform(6))
            // 根据点数移动
            square += diceRoll
            print("square2 --> \(square)")

        } while square < finalSquare
        print("Game over!")
        
        
        //case 分支的模式也可以是一个值的区间
        let approximateCount = 62
        let countedThings = "moons orbiting Saturn"
        var naturalCount: String
        switch approximateCount {
        case 0:
            naturalCount = "no"
        case 1..<5:
            naturalCount = "a few"
        case 5..<12:
            naturalCount = "several"
        case 12..<100:
            naturalCount = "dozens of"
        case 100..<1000:
            naturalCount = "hundreds of"
        default:
            naturalCount = "many"
        }
        print("There are \(naturalCount) \(countedThings).")

        //我们可以使用元组在同一个switch语句中测试多个值。元组中的元素可以是值，也可以是区间。另外，使用下划线（_）来匹配所有可能的值。
        let somePoint = (1, 1)
        switch somePoint {
        case (0, 0):
            print("(0, 0) is at the origin")
        case (_, 0):
            print("(\(somePoint.0), 0) is on the x-axis")
        case (0, _):
            print("(0, \(somePoint.1)) is on the y-axis")
        case (-2...2, -2...2):
            print("(\(somePoint.0), \(somePoint.1)) is inside the box")
        default:
            print("(\(somePoint.0), \(somePoint.1)) is outside of the box")
        }
        // 输出 "(1, 1) is inside the box"

        let anotherPoint = (0, 2)
        switch anotherPoint {
        case (let x, 0):
            print("on the x-axis with an x value of \(x)")
        case (0, let y):
            print("on the y-axis with a y value of \(y)")
        case let (x, y):
            print("somewhere else at (\(x), \(y))")
        }
        
        //case 分支的模式可以使用where语句来判断额外的条件。
        let yetAnotherPoint = (1, -1)
        switch yetAnotherPoint {
        case let (x, y) where x == y:
            print("(\(x), \(y)) is on the line x == y")
        case let (x, y) where x == -y:
            print("(\(x), \(y)) is on the line x == -y")
        case let (x, y):
            print("(\(x), \(y)) is just some arbitrary point")
        }

        //提前退出
        //像if语句一样，guard的执行取决于一个表达式的布尔值。我们可以使用guard语句来要求条件必须为真时，以执行guard语句后的代码。不同于if语句，一个guard语句总是有一个else从句，如果条件不为真则执行else从句中的代码。
        func greet(_ person: [String: String]) {
            guard let name = person["name"] else {
                return
            }
            print("Hello \(name)")
            guard let location = person["location"] else {
                print("I hope the weather is nice near you.")
                return
            }
            print("I hope the weather is nice in \(location).")
        }
        greet(["name": "John"])
        // 输出 "Hello John!"
        // 输出 "I hope the weather is nice near you."
        greet(["name": "Jane", "location": "Cupertino"])
        // 输出 "Hello Jane!"
        // 输出 "I hope the weather is nice in Cupertino."
        
        
        if #available(iOS 10, macOS 10.12, *) {
            // 在 iOS 使用 iOS 10 的 API, 在 macOS 使用 macOS 10.12 的 API
        } else {
            // 使用先前版本的 iOS 和 macOS 的 API
        }

    }
}
