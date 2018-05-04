//
//  WXUtilModule.m
//  WeeXT
//
//  Created by KeanQ on 2018/4/3.
//  Copyright © 2018年 anji-allways. All rights reserved.
//

#import "WXUtilModule.h"
//因为 module 暴露 method 是通过Objective-C宏来做的，调用的时候是通过反射，所以Swift扩展 module 通过extension Objective-C的类。
@implementation WXUtilModule
@synthesize weexInstance;

//\
+ (NSString *)WX_CONCAT_WRAPPER(token, __LINE__) { \
return NSStringFromSelector(method); \
}
#pragma clang diagnostic push //关闭unknow selector的warrning
#pragma clang diagnostic ignored "-Wundeclared-selector"
//对应的方法
//---------------------------

WX_EXPORT_METHOD(@selector(printSome::)) //Swift 中定义的方法，XCode 转换成的最终的方法名称，在`WeexDemo-Swift.h`里面查看
WX_EXPORT_METHOD(@selector(openURLStr::::)) //Swift 中定义的方法，XCode 转换成的最终的方法名称，在`WeexDemo-Swift.h`里面查看
WX_EXPORT_METHOD_SYNC(@selector(getRequestBody:))//请求体
WX_EXPORT_METHOD(@selector(call:))
WX_EXPORT_METHOD(@selector(calls:))

WX_EXPORT_METHOD_SYNC(@selector(getNativeUrl)) //获取Native返回值的方式
WX_EXPORT_METHOD_SYNC(@selector(getNativeDataUrl)) //获取Native资源返回值的方式



//---------------------------
#pragma clang diagnostic pop

@end
