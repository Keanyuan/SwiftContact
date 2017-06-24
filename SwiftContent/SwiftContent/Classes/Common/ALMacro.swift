//
//  ALMacro.swift
//  ExpressSystem
//
//  Created by Kean on 2017/5/31.
//  Copyright © 2017年 Kean. All rights reserved.
//

import UIKit


/// 第一次启动
let YMFirstLaunch = "firstLaunch"

let LOGIN_STATUS_KEY = "Login_Status_Key"

/// 屏幕的宽
let SCREENW = UIScreen.main.bounds.size.width
/// 屏幕的高
let SCREENH = UIScreen.main.bounds.size.height


/// iPhone 5
let isIPhone5 = SCREENH == 568 ? true : false
/// iPhone 6
let isIPhone6 = SCREENH == 667 ? true : false
/// iPhone 6P
let isIPhone6P = SCREENH == 736 ? true : false

let UIRate = (UIScreen.main.bounds.size.width/375)


/// prin输出
///
/// - Parameters:
///   - message: 输出内容
///   - logError: 是否错误 default is false
///   - file: 输出文件位置
///   - method: 对应方法
///   - line: 所在行
/*
 #file	String	所在的文件名
 #line	Int	所在的行数
 #column	Int	所在的列数
 #function	String	所在的声明的名字
 */
func printLog<T>(_ message: T,
              _ logError: Bool = false,
              file: String = #file,
              method: String = #function,
              line: Int = #line)
{
    if logError {
        print("\((file as NSString).lastPathComponent)\(method) [Line \(line)]: \(message)")
    } else {
        #if DEBUG
            print("\((file as NSString).lastPathComponent)\(method) [Line \(line)]: \(message)")
        #endif
    }
}

/// 利用泛型获取随机数组中的一个元素
///
/// - Parameter array: 传入的数组
/// - Returns: 返回数组中一个随机元素
func randomElementFromArray<T>(_ array:Array<T>) -> T {
    let index: Int = Int(arc4random_uniform(UInt32(array.count)))
    return array[index]
}

