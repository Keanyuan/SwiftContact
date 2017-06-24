//
//  BlackjackCard.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/20.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

struct BlackjackCard {
    // 嵌套的 SuitE 枚举
    enum SuitE: Character {
        //黑桃♠ 红心❤️ 方砖 梅花
        case Spades = "♠", Hearts = "♡", Diamonds = "♢", Clubs = "♣"
    }
    
    // 嵌套的 RankE 枚举
    enum RankE: Int {
        case Two = 2, Three, Four, Five, Six, Seven, Eight, Nine, Ten
        case Jack, Queen, King, Ace
        struct Values {
            let first: Int, second: Int?
        }
        var values: Values{
            switch self {
            case .Ace:
                return Values(first: 1, second: 11)
            case .Jack, .Queen, .King:
                return Values(first: 10, second: nil)
            default:
                return Values(first: self.rawValue, second: nil)
            }
        }
        
    }
    
    let rank: RankE, suit: SuitE
    var description: String {
        var output = "suit is \(suit.rawValue),"
        output += " value is \(rank.values.first)"
        if let second = rank.values.second {
            output += " or \(second)"
        }
        return output
    }
    
    

}
