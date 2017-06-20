//
//  Tandem.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/19.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class Tandem: Bicycle {
    var currentNumberOfPassengers = 0
    override var description: String {
        return super.description + " in Passengers Number is \(gear)"
    }
    
    override var currentSpeed: Double {
        didSet{
            gear  = Int(currentSpeed / 10.0) + 1
        }
    }
    
}
