//
//  VendingMachine.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/20.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit


enum VendingMachineError: Error {
    case invalidSelection                     //选择无效
    case insufficientFunds(coinsNeeded: Int) //金额不足
    case outOfStock                             //缺货
}

struct Item {
    var price: Int
    var count: Int
}

class VendingMachine: NSObject {
    var inventory = [
        "Candy Bar": Item(price: 12, count: 7),
        "Chips": Item(price: 10, count: 4),
        "Pretzels": Item(price: 7, count: 11)
    ]
    var coinsDeposited = 0
    func dispenseSnack(snack: String) {
        print("Dispensing \(snack)")
    }
    
    func vend(itemName name: String) throws {
        guard let item = inventory[name] else {
            //选择无效
            throw VendingMachineError.invalidSelection
        }
        guard item.count > 0 else {
            //缺货
            throw VendingMachineError.outOfStock
        }
        
        guard item.price <= coinsDeposited else {
            //金币不足
            throw VendingMachineError.insufficientFunds(coinsNeeded: item.price - coinsDeposited)
        }
        coinsDeposited -= item.price
        var newItem = item
        newItem.count -= 1
        inventory[name] = newItem
        printLog("Dispensing \(name)")
    }
}
