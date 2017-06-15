//
//  Int.swift
//  NE
//
//  Created by 祁志远 on 2017/6/13.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import Foundation

extension Int: ExampleProtocol {
    var simpleDescription: String {
        return "The number \(self)"
    }
    mutating func adjust() {
        self += 42
    }
}
