//
//  RequestBodyModel.swift
//  WeeXT
//
//  Created by KeanQ on 2018/4/28.
//  Copyright © 2018年 anji-allways. All rights reserved.
//

import UIKit

class RequestBodyModel: BaseModel {
    // 平台类型 iOS="2"
    var platformType = "2"
    // token
    var token = ""
    // 签名
    var sign = ""
    // 当前时间
    var time = ""
    // 请求数据
    var reqData = ""
}
