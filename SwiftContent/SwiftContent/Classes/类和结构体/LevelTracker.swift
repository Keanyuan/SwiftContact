//
//  LevelTracker.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/16.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

struct LevelTracker {
    static var highestUnlockLevel = 1
    var currentLevel = 1
    static func unlock(_ level: Int){
        if level > highestUnlockLevel {
            highestUnlockLevel = level
        }
    }
    
    static func isUnlocked(_ level: Int) -> Bool{
        return level <= highestUnlockLevel
    }
    
    @discardableResult
    mutating func advance(to level: Int) -> Bool {
        if LevelTracker.isUnlocked(level) {
            currentLevel = level
            return true
        } else { return false }
    }
}
