//
//  Array+Extension.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/19.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

extension Array {
    func random() -> Iterator.Element? {
        guard count > 0 else {
            return nil
        }
        let offset = arc4random_uniform(numericCast(count))
        let i = index(startIndex, offsetBy: numericCast(offset))
        return self[i]
    }
    
    
    /// 数组随机排序
    ///
    /// - Returns: 随机排序数组结果
    public mutating func shuffleUseSort() -> Array {
        var list = self
        for index in 0..<list.count {
            let newIndex = Int(arc4random_uniform(UInt32(list.count-index))) + index
            if index != newIndex {
                swap(&list[index], &list[newIndex])
            }
        }
        return list
    }
}

