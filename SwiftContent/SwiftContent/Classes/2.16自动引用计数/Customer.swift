//
//  Customer.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/19.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class Customer {
    let name: String
    var card: CreditCard?
    init(name: String) {
        self.name = name
    }
    deinit { print("\(name) is being deinitialized") }

}

class CreditCard {
    let number: UInt64
    unowned let customer: Customer
    init(number: UInt64, customer: Customer) {
        self.number = number
        self.customer = customer
    }
    deinit { print("Card #\(number) is being deinitialized") }
}
