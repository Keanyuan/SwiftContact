//
//  AJTools.swift
//  WeeXT
//
//  Created by KeanQ on 2018/4/28.
//  Copyright © 2018年 anji-allways. All rights reserved.
//

import Foundation
import UIKit



// 将Json转换为Dictionary
func convertToDictionary(text: String) -> [String: Any]? {
    if let data = text.data(using: .utf8) {
        do {
            return try JSONSerialization.jsonObject(with: data, options: []) as? [String: Any]
        } catch {
            print(error.localizedDescription)
        }
    }
    return nil
}

func DataToString(data:Data)->(String){
    
    let strData:String = NSString(data: data, encoding: String.Encoding.utf8.rawValue)! as String
    
    return strData
}

//MARK:- 有关数据处理
func getSignForWeex(reqDataString: String, timeStr:String, tokenStr: String) -> String {
    
    var reqDataStr:String = ""
    if let paramsDict = convertToDictionary(text: reqDataString) {
        reqDataStr = creatJsonStringForWeex(dict: paramsDict)
    }
    let valueStr = "reqData" + reqDataStr + "time" + timeStr + "token" + tokenStr
    return valueStr.md5()
}
//formate有序json字符串
private func creatJsonStringForWeex(dict: [String: Any]) ->String {
    if (!JSONSerialization.isValidJSONObject(dict)) {
        print("无法解析出JSONString")
        return ""
    }
    var namedPaird = [String]()
    let sortedKeysAndValues = dict.sorted{$0.0 < $1.0}
    
    for (key, value) in sortedKeysAndValues {
        if value is [String: Any] {
            namedPaird.append("\(key):\(creatJsonStringForWeex(dict: value as! [String : Any]))")
        } else if value is [Any] {
            let array = value as! [Any]
            var arrValue = [String]()
            for i in 0..<array.count {
                arrValue.append(creatJsonStringForWeex(dict: array[i] as! [String : Any]))
                //                    namedPaird.append("\(key):\(self.creatJsonString(dict: array[i] as! [String : Any]))")
            }
            namedPaird.append("\(key):[\(arrValue.joined(separator: ","))]")
        } else {
            namedPaird.append("\(key):\(value)")
        }
    }
    let returnString = namedPaird.joined(separator: ",")
    return "{\(returnString)}"
}
