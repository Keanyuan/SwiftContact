//
//  UIImageView+Hack.m
//  AllwaysLogistics
//
//  Created by Kean on 2017/6/20.
//  Copyright © 2017年 Kean. All rights reserved.
//

#import "UIImageView+Hack.h"
#import <objc/runtime.h>

@implementation UIImageView (Hack)

/*
 static inline void af_swizzleSelector(Class theClass, SEL originalSelector, SEL swizzledSelector) {
 Method originalMethod = class_getInstanceMethod(theClass, originalSelector);
 Method swizzledMethod = class_getInstanceMethod(theClass, swizzledSelector);
 method_exchangeImplementations(originalMethod, swizzledMethod);
 }
 */
+ (void)load {
    //获取UIImageView的类的实例方法setImage：
    Method originalMethod = class_getInstanceMethod([self class], @selector(setImage:));
    //获取UIImageView的类的实例方法ld_setImage：
    Method swizzledMethod = class_getInstanceMethod([self class], @selector(ld_setImage:));
    //交换方法 方法
    //调用setImage相当于调用ld_setImage
    //调用ld_setImage相当于setImage
    method_exchangeImplementations(originalMethod, swizzledMethod);
}

- (void)ld_setImage:(UIImage *)image{
    
    //使用CG 重写生成一张和目标尺寸相同的图片
    UIGraphicsBeginImageContextWithOptions(self.bounds.size, YES, 0);
    //绘制图像
    [image drawInRect:self.bounds];
    //取得结果
    UIImage *result = UIGraphicsGetImageFromCurrentImageContext();
    //关闭上下文
    UIGraphicsEndImageContext();
    //调用系统默认的setImage方法
    [self ld_setImage:result];
}

@end
