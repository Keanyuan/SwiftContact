//
//  StringE.swift
//  NE
//
//  Created by 祁志远 on 2017/6/14.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class StringE: NSObject {
    public static func setStringTest() {
        //字符串为空 情况使用
        var emptyString = "" // --> var string = String()
        if emptyString.isEmpty {
            emptyString = "this is a value string 🐶"
        }
        
        //获取字符
        for character in emptyString.characters {
            print(character)
        }
        
        let catCharacters: [Character] = ["C", "a", "t", "!", "🐱"]
        var catString = String(catCharacters)
        print(catString)
        
        //用append()方法将一个字符附加到一个字符串变量的尾部
        //您不能将一个字符串或者字符添加到一个已经存在的字符变量上，因为字符变量只能包含一个字符。
        catString.append("1")
        print(catString)
        //插值字符串中写在括号中的表达式不能包含非转义反斜杠 (\)，并且不能包含回车或换行符。不过，插值字符串可以包含其他字面量。
        catString = "this is \(catString)"
        print(catString)
        
        let decomposed: Character = "\u{1112}\u{1161}\u{11AB}"   // ᄒ, ᅡ, ᆫ

        print(decomposed)
        
        //字符串 字符个数
        print(catString.characters.count)
        
        
        //通过调用 String 的 index(before:) 或 index(after:) 方法，可以立即得到前面或后面的一个索引。您还可以通过调用 index(_:offsetBy:) 方法来获取对应偏移量的索引，这种方式可以避免多次调用 index(before:) 或 index(after:) 方法。
        print("startIndex-->\(emptyString[emptyString.startIndex])")
        // t
        print("before --> \(emptyString[emptyString.index(before: emptyString.endIndex)])")
        //🐶
        print("after --> \(emptyString[emptyString.index(after: emptyString.startIndex)])")
        // h
        let index = emptyString.index(emptyString.startIndex, offsetBy: 5)
        print("offsetBy --> \(emptyString[index])")
        // i


        //使用 characters 属性的 indices 属性会创建一个包含全部索引的范围(Range)，用来在一个字符串中访问单个字符
        for index in emptyString.characters.indices {
            print("\(emptyString[index]) ", terminator: "")
        }
        
        //调用 insert(_:at:) 方法可以在一个字符串的指定索引插入一个字符
        //最后一个字符后边插入 “！”
        emptyString.insert("!", at: emptyString.endIndex)
        print(emptyString)
        
        //调用 insert(contentsOf:at:) 方法可以在一个字符串的指定索引插入一个段字符串。
        // 最后一个字符之前插入 字符串
        emptyString.insert(contentsOf:" tsdehere".characters, at: emptyString.index(before: emptyString.endIndex))
        
        print(emptyString)
        
        
        //调用 remove(at:) 方法可以在一个字符串的指定索引删除一个字符，
        //删除最后一个字符
        emptyString.remove(at: emptyString.index(before: emptyString.endIndex))
        print(emptyString)
        
        //调用 removeSubrange(_:) 方法可以在一个字符串的指定索引删除一个子字符串。
        //删除 后6位字符
        let range = emptyString.index(emptyString.endIndex, offsetBy: -6)..<emptyString.endIndex
        emptyString.removeSubrange(range)
        print(emptyString)
        
        //通过调用字符串的hasPrefix(_:)/hasSuffix(_:)方法来检查字符串是否拥有特定前缀/后缀
        if emptyString.hasPrefix("this") {
            print("包含对应前缀")
        }
        
        if emptyString.hasSuffix("ts") {
            print("包含对应后缀")
        }
        
        //通过contains(_ :)方法检查字符串释放出包含对应字符串
        if emptyString.contains("string") {
            print("包含对应字符串")
        }
        
        
    }
    
}
