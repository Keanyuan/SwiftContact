//
//  Contera.swift
//  NE
//
//  Created by 祁志远 on 2017/6/13.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

//protocol Container {
//    //associatedtype 关键字来指定关联类型
//    associatedtype ItemType
//    mutating func append(_ item: ItemType)
//    var count: Int { get }
//    subscript(i: Int) -> ItemType { get }
//}


enum Rank: Int {
    case Ace = 1
    case Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten
    case Jack, Queen, King
    func simpleDescription() -> String {
        switch self {
        case .Ace:
            return "ace"
        case .Jack:
            return "jack"
        case .Queen:
            return "queen"
        case .King:
            return "king"
        default:
            return String(self.rawValue)
        }
    }
}

enum Suit {
    case Spades, Hearts, Diamonds, Clubs
    func simpleDescription() -> String {
        switch self {
        case .Spades, .Clubs:
            return "black"
        case .Hearts, .Diamonds:
            return "red"
            //        case .Clubs:
            //            return "clubs"
        }
    }
}

enum ServerResponse {
    case Result(String, String)
    case Failure(String)
    case codeRce(String)
}

struct Card {
    var rank: Rank
    var suit: Suit
    func simpleDescription() -> String {
        return "The \(rank.simpleDescription()) of \(suit.simpleDescription())"
    }
}




class Contera: NSObject {
//    var count: Int
//
//    typealias ItemType = <#type#>
//
//    // IntStack 的原始实现部分
//    var items = [Int]()
}
