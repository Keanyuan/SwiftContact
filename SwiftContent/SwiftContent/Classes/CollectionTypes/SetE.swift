//
//  SetE.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/15.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class SetE: NSObject {
    public class func setSetE() {
        var favoriteGenres: Set = ["Rock", "Classical", "Hip hop"]
        print("I have \(favoriteGenres.count) favorite music genres.")
        // 打印 "I have 3 favorite music genres."
        print(favoriteGenres)
        
        //使用布尔属性isEmpty作为一个缩写形式去检查count属性是否为0
        if favoriteGenres.isEmpty {
            print("As far as music goes, I'm not picky.")
        } else {
            print("I have particular music preferences.")
        }

        //你可以通过调用Set的insert(_:)方法来添加一个新元素：
        favoriteGenres.insert("Jazz")
        // favoriteGenres 现在包含4个元素
        print(favoriteGenres)
        
        
        //通过调用Set的remove(_:)方法去删除一个元素
        if let removedGenre = favoriteGenres.remove("Rock") {
            print("\(removedGenre)? I'm over it.")
        } else {
            print("I never much cared for that.")
        }
        
        //使用contains(_:)方法去检查Set中是否包含一个特定的值：
        if favoriteGenres.contains("Funk") {
            print("I get up on the good foot.")
        } else {
            print("It's too funky in here.")
        }
        
        print(favoriteGenres)
        //可以在一个for-in循环中遍历一个Set中的所有值
        for genre in favoriteGenres {
            print("\(genre)")
        }
        print("-----")
        //Swift 的Set类型没有确定的顺序，为了按照特定顺序来遍历一个Set中的值可以使用sorted()方法，它将返回一个有序数组，这个数组的元素排列顺序由操作符'<'对元素进行比较的结果来确定
        for genre in favoriteGenres.sorted() {
            print("\(genre)")
        }
        
        /*
         
         使用intersection(_:)方法根据两个集合中都包含的值创建的一个新的集合。  相交
         使用symmetricDifference(_:)方法根据在一个集合中但不在两个集合中的值创建一个新的集合。   不相交
         使用union(_:)方法根据两个集合的值创建一个新的集合。  相容
         使用subtracting(_:)方法根据不在该集合中的值创建一个新的集合。非a 或 非b集合

         */
        
        let oddDigits: Set = [1, 3, 5, 7, 9]
        let evenDigits: Set = [0, 2, 4, 6, 8]
        let singleDigitPrimeNumbers: Set = [2, 3, 5, 7]
    
        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        print(oddDigits.union(evenDigits).sorted())
        
        // []
        print(oddDigits.intersection(evenDigits).sorted())
        
        // [1, 9]
        print(oddDigits.subtracting(singleDigitPrimeNumbers).sorted())

        // [1, 2, 9]
        print(oddDigits.symmetricDifference(singleDigitPrimeNumbers).sorted())

        
        /*
         使用“是否相等”运算符(==)来判断两个集合是否包含全部相同的值。
         使用isSubset(of:)方法来判断一个集合中的值是否也被包含在另外一个集合中。
         使用isSuperset(of:)方法来判断一个集合中包含另一个集合中所有的值。
         使用isStrictSubset(of:)或者isStrictSuperset(of:)方法来判断一个集合是否是另外一个集合的子集合或者父集合并且两个集合并不相等。
         使用isDisjoint(with:)方法来判断两个集合是否不含有相同的值(是否没有交集)。
         */
        
        let houseAnimals: Set = ["🐶", "🐱"]
        let farmAnimals: Set = ["🐮", "🐔", "🐑", "🐶", "🐱"]
        let cityAnimals: Set = ["🐦", "🐭"]
        
        //false  //是否相等
        print(houseAnimals == favoriteGenres)

        // true  //是否被包含
        print(houseAnimals.isSubset(of: farmAnimals))
        
        // true  //是否包含
        print(farmAnimals.isSuperset(of: houseAnimals))
        
        // true  //是否没有交集
        print(farmAnimals.isDisjoint(with: cityAnimals))
        

        
        
    }
}
