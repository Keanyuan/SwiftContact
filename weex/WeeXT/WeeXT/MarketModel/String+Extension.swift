//
//  String+Extension.swift
//  Dealers
//
//  Created by 祁志远 on 2017/8/18.
//  Copyright © 2017年 Anji-Allways. All rights reserved.
//

import Foundation

extension String {
    /*
     *去掉首尾空格
     */
    var removeHeadAndTailSpace:String {
        let whitespace = NSCharacterSet.whitespaces
        return self.trimmingCharacters(in: whitespace)
        
    }
    /*
     *去掉首尾空格 包括后面的换行 \n
     */
    var removeHeadAndTailSpacePro:String {
        let whitespace = NSCharacterSet.whitespacesAndNewlines
        return self.trimmingCharacters(in: whitespace)
    }
    /*
     *去掉所有空格
     */
    var removeAllSapce:String {
        return self.replacingOccurrences(of: " ", with: "", options: .literal, range: nil)
    }
    
    /// 字符串替换
    ///
    /// - Parameters:
    ///   - of: 需要替换的字符
    ///   - with: 替换的字符
    /// - Returns: 替换的结果
    func stringByReplacing(of: String, with: String) -> String {
        let str = self.replacingOccurrences(of: of, with: with, options: .literal, range: nil)
        return str
    }
    
    
    /*
     *去掉首尾空格 后 指定开头空格数
     */
    func beginSpaceNum(num: Int) -> String {
        var beginSpace = ""
        for _ in 0..<num {
            beginSpace += " "
        }
        return beginSpace + self.removeHeadAndTailSpacePro
    }
    
    /*
     * MARK:- 计算字符串Size
     */
    
    func sizeWith(_ font : UIFont , _ maxSize : CGSize , _ lineMargin : CGFloat = 0) ->CGSize {
        let options = NSStringDrawingOptions.usesLineFragmentOrigin
        let paragraphStyle : NSMutableParagraphStyle = NSMutableParagraphStyle()
        paragraphStyle.lineSpacing = lineMargin
        let textBouds = self.boundingRect(with: maxSize,
                                          options: options,
                                          attributes: [NSAttributedStringKey.font: font,NSAttributedStringKey.paragraphStyle:paragraphStyle],
                                          context: nil)
        return textBouds.size
        
    }

    //将原始的url编码为合法的url
    func urlEncoded() -> String {
        let encodeUrlString = self.addingPercentEncoding(withAllowedCharacters: NSCharacterSet(charactersIn: "!*'();:@&=+$,/?%#[]").inverted)
        return encodeUrlString ?? ""
    }
    
    //将编码后的url转换回原始的url
    func urlDecoded() -> String {
        return self.removingPercentEncoding ?? ""
    }
    
    //判断字符串是否为空
    func isValid() -> Bool {
        return self.count > 0
    }
    
    
    /**
     验证URL格式是否正确
     let str = "欢迎访问http://www.hangge.com，https://hangge.com\n以及ftp://hangge.com"
     print("测试字符串式：\n\(str)\n")
     print("匹配到的链接：")
     let urls = str.getUrls()
     for url in urls {
     print(url)
     }
     
     printLog(str.verifyUrl())
     printLog(str.verifyCorrectUrl())
     */
    func verifyUrl() -> Bool {
        // 创建一个正则表达式对象
        do {
            let dataDetector = try NSDataDetector(types:
                NSTextCheckingTypes(NSTextCheckingResult.CheckingType.link.rawValue))
            // 匹配字符串，返回结果集
            let res = dataDetector.matches(in: self,
                                           options: NSRegularExpression.MatchingOptions(rawValue: 0),
                                           range: NSMakeRange(0, self.count))
            
            // 判断结果(完全匹配)
            if res.count == 1  && res[0].range.location == 0
                && res[0].range.length == self.count {
                return true
            }
        }
        catch {
            print(error)
        }
        return false
    }
    
    /**
     验证URL格式是否正确
     */
    func verifyCorrectUrl() -> Bool {
        //创建NSURL实例
        if let url = URL(string: self) {
            //检测应用是否能打开这个NSURL实例
            return UIApplication.shared.canOpenURL(url)
        }
        return false
    }
    
    
    /**
     匹配字符串中所有的URL
     */
    func getUrls() -> [String] {
        var urls = [String]()
        // 创建一个正则表达式对象
        do {
            let dataDetector = try NSDataDetector(types:
                NSTextCheckingTypes(NSTextCheckingResult.CheckingType.link.rawValue))
            
            // 匹配字符串，返回结果集
            let res = dataDetector.matches(in: self,
                                           options: NSRegularExpression.MatchingOptions(rawValue: 0),
                                           range: NSMakeRange(0, self.count))
            
            // 取出结果
            for checkingRes in res {
                urls.append((self as NSString).substring(with: checkingRes.range))
            }
        }
        catch {
            print(error)
        }
        return urls
    }
    
    
    /*手机号验证*/
    func isPhoneNumber() -> Bool {
        if self.count == 0 {
            return false
        }
        let mobile = "^(13[0-9]|15[0-9]|18[0-9]|17[0-9]|147)\\d{8}$"
        let regexMobile = NSPredicate(format: "SELF MATCHES %@",mobile)
        if regexMobile.evaluate(with: self) == true {
            return true
        }else
        {
            return false
        }
    }
    
    /*
     邮编号码的验证
     */
    func isZipCodeNumber() -> Bool {
        if self.count == 0 {
            return false
        }
        let zipCodeNumber = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}"
        let regexCodeNumber = NSPredicate(format: "SELF MATCHES %@",zipCodeNumber)
        if regexCodeNumber.evaluate(with: self) == true {
            return true
        }else
        {
            return false
        }
    }
    //判断是否是QQ号码
    func checkIsQQNumber() ->Bool {
        // 1.判断是否以0开头
        if self.hasPrefix("0"){
            return false
        }
        
        // 2.判断是否是5~15位
        if self.count < 5 || self.count > 15{
            return false
        }
        
        // 3.判断是否全部都是数字
        for c in self{
            if c < "0" || c > "9"{
                return false
            }
        }
        return true
    }
    
    // MD5加密
    func md5() -> String {
        let str = self.cString(using: String.Encoding.utf8)
        let strLen = CUnsignedInt(self.lengthOfBytes(using: String.Encoding.utf8))
        let digestLen = Int(CC_MD5_DIGEST_LENGTH)
        let result = UnsafeMutablePointer<CUnsignedChar>.allocate(capacity: digestLen)
        CC_MD5(str!, strLen, result)
        let hash = NSMutableString()
        for i in 0 ..< digestLen {
            hash.appendFormat("%02x", result[i])
        }
        result.deinitialize()

        return String(format: hash as String)
    }

    
    //json字符串转成字典
    func jsonStringToDictionay() -> Dictionary<String, Any> {
        
        let jsonData: Data = self.data(using: .utf8)!
        let dict = try? JSONSerialization.jsonObject(with: jsonData, options: .mutableContainers)
        
        if dict != nil {
            return dict as! Dictionary
        }
        return Dictionary()
    }
    
    
   
    /// 密码md5加密
    ///
    /// - Returns: 加密结果
    func md5Ajkey(_ key: String = "QAZWSXEDCRFV09876543210") -> String {
        return "\(self)\(key)".md5()
    }

}


