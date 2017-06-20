//
//  ViewController.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/15.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        let  imageView = UIImageView()
        let image = UIImage(named: "")
        image?.ld_imageCornerSize(with: (image?.size)!, fill: UIColor.white, completion: { (imageName) in
            imageView.image = imageName
        })
        
        
        // Do any additional setup after loading the view, typically from a nib.
        
        //        enmuTest()
        //        print(anyCommonElements([1,2,3], [4]))
        
        
        //        do {
        //            try canThrowAnError()
        //            // 没有错误消息抛出
        //        } catch {
        //            // 有一个错误消息抛出
        //        }
//        StringE.setStringTest()
        
//        EnumE.setEnumE()
        
        //不能在结构体类型的常量（a constant of structure type）上调用可变方法，因为其属性不能被改变，即使属性是变量属性，详情参见常量结构体的存储属性：
        var leftChannel = AudioChannel(x: 1.0, y: 1.0, currentLevel: 7)
        var rightChannel = AudioChannel()
        leftChannel.currentLevel = 7
        printLog(leftChannel.currentLevel)
        printLog(AudioChannel.maxInputLevelForAllChannels)
        leftChannel.moveByX(deltaX: 2.0, y: 3.0)
        printLog("x== \(leftChannel.x)" + " y== \(leftChannel.y)")
        rightChannel.currentLevel = 11
        printLog(rightChannel.currentLevel)
        printLog(AudioChannel.maxInputLevelForAllChannels)
        
        
        var player = Player(name: "Argyrios")
        player.complete(level: 1)
        printLog("highest unlocked level is now \(LevelTracker.highestUnlockLevel)")
        player = Player(name: "Beto")
        if player.tracker.advance(to: 6) {
            printLog("player is now on level 6")
        } else {
            printLog("level 6 has not yet been unlocked")
        }
        
        
        let threeTimesTable = TimesTable(multiplier: 3)
        printLog("six times three is \(threeTimesTable[6])")
        //上面演示的threeTimesTable[6]。这条语句查询了3的乘法表中的第六个元素，返回3的6倍即18
        
    }



}


extension ViewController {
    
    func canThrowAnError() throws {
        // 这个函数有可能抛出错误
        var someInt = 3
        var anotherInt = 107
        swap(&someInt, &anotherInt)
        // someInt 现在 107, and anotherInt 现在 3
        print("\(someInt) " + "\(anotherInt)")
        
        var someString = "hello"
        var anotherString = "world"
        swap(&someString, &anotherString)
        print("\(someString) " + "\(anotherString)")
        // someString 现在 "world", and anotherString 现在 "hello"
        
        
        let strings = ["cat", "dog", "llama", "parakeet", "terrapin"]
        
        if let foundIndex : [String : String] = findIndex(ofString: "llama", in: strings) {
            print("The index of llama is \(foundIndex)")
        }
        
    }
    
    
    
    
    func anyCommonElements<T: Sequence, U: Sequence>(_ lhs: T, _ rhs: U) -> Bool
        where T.Iterator.Element: Equatable, T.Iterator.Element == U.Iterator.Element {
            for lhsItem in lhs {
                for rhsItem in rhs {
                    if lhsItem == rhsItem {
                        return true
                    }
                }
            }
            return false
    }
    
    func enmuTest() {
        
        //        let ace = Rank.Six
        //        let aceRawValue = ace.rawValue
        //        if let convertedRank = Rank(rawValue: 3) {
        //            let threeDescription = convertedRank.simpleDescription()
        //            print(threeDescription)
        //        }
        //        print("\(aceRawValue)   "  + "\(ace)")
        
        
        //        let hearts = Suit.Hearts
        //        let heartsDescription = hearts.simpleDescription()
        //        print("\(hearts)  " + "\(heartsDescription)")
        //
        
        //
        //        let success = ServerResponse.Result("6:00 am", "8:09 pm")
        //        let failure = ServerResponse.Failure("Out of cheese.")
        //        let codeRce = ServerResponse.codeRce("default……")
        //
        //        switch codeRce {
        //        case let .Result(sunrise, sunset):
        //            let serverResponse = "Sunrise is at \(sunrise) and sunset is at \(sunset)."
        //            print(serverResponse)
        //        case let .Failure(message):
        //            print("Failure...  \(message)")
        //        case let .codeRce(code):
        //            print("\(code)")
        //        }
        
        //        let threeOfSpades = Card(rank: .Three, suit: .Spades)
        //        let threeOfSpadesDescription = threeOfSpades.simpleDescription()
        //
        //        print("\(threeOfSpadesDescription)")
        //        SimpleStructure.setSimpleStructure()
        //        print(7.simpleDescription)
        print(repeatItem(repeating: "knock", numberOfTimes:4))
        
    }
    
    func equilateralTriangle(){
        let triangle = EquilateralTriangle(sideLength: 3.1, name: "a triangle")
        print(triangle.perimeter)
        triangle.perimeter = 9.9
        print(triangle.sideLength)
        print(triangle.simpleDescription())
        
    }
    
    func triangAndSquare() {
        let triangleAndSquare = TriangleAndSquare(size: 10, name: "another test shape")
        print(triangleAndSquare.square.sideLength)
        print(triangleAndSquare.triangle.sideLength)
        triangleAndSquare.square = Square(sideLength: 50, name: "larger square")
        print(triangleAndSquare.triangle.sideLength)
    }
    
    func reportGenericity<Put>(_ put: Put) -> [Put] {
        var result = [Put]()
        for _ in 0...5{
            result.append(put)
        }
        return result
    }
    
    func repeatItem<Item>(repeating item: Item, numberOfTimes: Int) -> [Item] {
        var result = [Item]()
        for _ in 0..<numberOfTimes {
            result.append(item)
        }
        return result
    }

}


extension ViewController {
    
    //类型必须相同
    //数据交换 使用输入输出参数（inout）来交换 a 和 b 的值
    fileprivate func swapTwoInts(_ a: inout Int, _ b: inout Int){
        let tempA = a
        a = b
        b = tempA
        
    }
    
    func swapTwoStrings(_ a: inout String, _ b: inout String) {
        let temporaryA = a
        a = b
        b = temporaryA
    }
    
    fileprivate func swapTwoDoubles(_ a: inout Double, _ b: inout Double) {
        let temporaryA = a
        a = b
        b = temporaryA
    }
    
    //使用于任何版本的泛型
    fileprivate func swapTwoValues<T>(_ a: inout T, _ b: inout T){
        let temp = a
        a  = b
        b = temp
    }
    
    //Equatable协议 该协议要求任何遵循该协议的类型必须实现等式符（==）及不等符(!=)，从而能对该类型的任意两个值进行比较
    fileprivate func findIndex<T:Equatable>(ofString valueToFind: T, in array: [T]) ->[String : T]? {
        
        for (index, value) in array.enumerated() {
            if value == valueToFind {
                return ["\(index)" : value]
            }
        }
        return ["" : T.self] as? [String : T]
    }
}

