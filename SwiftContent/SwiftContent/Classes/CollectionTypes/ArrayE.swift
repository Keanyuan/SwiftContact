//
//  ArrayE.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/15.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class ArrayE: NSObject {
    
    public class func setArrayE() {
        //数组应该遵循像Array<Element>这样的形式，其中Element是这个数组中唯一允许存在的数据类型
        var someInts = [Int]()
        printLog("someInts is of type [Int] with \(someInts.count) items.")
        //数组添加参数
        
        someInts.append(3)
        someInts.append(4)
        someInts.append(5)
        printLog("someInts is of type [Int] with \(someInts) items.")

        someInts = []
        // someInts 现在是空数组，但是仍然是 [Int] 类型的。
        printLog("someInts is of type [Int] with \(someInts) items.")

        let threeDoubles = Array(repeating: 0.0, count: 3)
        // threeDoubles 是一种 [Double] 数组，等价于 [0.0, 0.0, 0.0]
        printLog("threeDoubles is default type  with \(threeDoubles) ")
        
        let anotherThreeDoubles = Array(repeating: 2.5, count: 3)
        // anotherThreeDoubles 被推断为 [Double]，等价于 [2.5, 2.5, 2.5]
        let sixDoubles = threeDoubles + anotherThreeDoubles
        // sixDoubles 被推断为 [Double]，等价于 [0.0, 0.0, 0.0, 2.5, 2.5, 2.5]、
        printLog(sixDoubles)
        
        var shoppingList = ["Eggs", "Milk"]
        printLog("The shopping list contains \(shoppingList.count) items.")
        // 输出 "The shopping list contains 2 items."（这个数组有2个项）
        
        //使用布尔属性isEmpty作为一个缩写形式去检查count属性是否为0
        if shoppingList.isEmpty {
            printLog("The shopping list is empty.")
        } else {
            printLog("The shopping list is not empty.")
        }
        
        //使用append(_:)方法在数组后面添加新的数据项：
        shoppingList.append("Flour")
        printLog(shoppingList)

        //除此之外，使用加法赋值运算符（+=）也可以直接在数组后面添加一个或多个拥有相同类型的数据项：
        shoppingList += ["Baking Powder"]
        // shoppingList 现在有四项了
        printLog(shoppingList)

        shoppingList += ["Chocolate Spread", "Cheese", "Butter"]
        // shoppingList 现在有七项了
        printLog(shoppingList)
        

        //直接使用下标语法来获取数组中的数据项，把我们需要的数据项的索引值放在直接放在数组名称的方括号中：
        var firstItem = shoppingList[0]
        // 第一项是 "Six eggs"
        printLog(firstItem)
        
        shoppingList[0] = "Six eggs"
        // 其中的第一项现在是 "Six eggs" 而不是 "Eggs
        printLog(shoppingList)

        //利用下标来一次改变一系列数据值，即使新数据和原有数据的数量是不一样的
        shoppingList[4...6] = ["Bananas", "Apples"]
        // shoppingList 现在有6项
        printLog(shoppingList)
        
        //调用数组的insert(_:at:)方法来在某个具体索引值之前添加数据项：
        shoppingList.insert("Maple Syrup", at: 0)
        // shoppingList 现在有7项
        // "Maple Syrup" 现在是这个列表中的第一项
        print(shoppingList)

        //可以使用remove(at:)方法来移除数组中的某一项
       shoppingList.remove(at: 0)
        // 索引值为0的数据项被移除
        print(shoppingList)

        firstItem = shoppingList[0]
        // firstItem 现在等于 "Six eggs"
        print(firstItem)
        
        let apples = shoppingList.removeLast()
        print(apples)
        print(shoppingList)
        
        //使用for-in循环来遍历所有数组中的数据项
        for item in shoppingList {
            print(item)
        }

        //需要每个数据项的值和索引值，可以使用enumerated()方法来进行数组遍历。
        for (index, value) in shoppingList.enumerated() {
            print("Item \(String(index + 1)): \(value)")
        }
        
        
        var arrayo = ["Mazy", "Lucy", "Lily", "Vivian", "Owen"]
        
        let ele = randomElementFromArray(arrayo)
        
        
        printLog(ele)
        
        printLog(arrayo.shuffleUseSort())
        

    }
}
