//
//  EquilateralTriangle.swift
//  NE
//
//  Created by 祁志远 on 2017/6/13.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

class EquilateralTriangle: NamedShape {
    var sideLength: Double = 0.0
    
    init(sideLength: Double, name: String) {
        self.sideLength = sideLength
        super.init(name: name)
        numberOfSides = 3
    }
    

    var perimeter : Double {
        get {
            return 3.0 * sideLength
        }
        set {
            sideLength = newValue / 3.0
        }
    }
    
    
    
    override func simpleDescription() -> String {
        print(super.simpleDescription())
        return "An equilateral triagle with sides of length \(sideLength)."
    }
}
