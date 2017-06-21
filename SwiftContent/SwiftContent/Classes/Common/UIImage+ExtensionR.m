//
//  UIImage+ExtensionR.m
//  AllwaysLogistics
//
//  Created by Kean on 2017/6/20.
//  Copyright © 2017年 Kean. All rights reserved.
//

#import "UIImage+ExtensionR.h"

@implementation UIImage (ExtensionR)

//切圆角
- (void)ld_imageCornerSizeWithSize:(CGSize)size fillColor:(UIColor *)fillColor completion:(void(^)(UIImage *))completion {
    //异步绘制图像
    dispatch_async(dispatch_get_global_queue(0, 0), ^{
        //利用绘图，建立上下文
        UIGraphicsBeginImageContextWithOptions(size, YES, 0);
        CGRect rect = CGRectMake(0, 0, size.width, size.height);
        
        //设置填充颜色
        [fillColor setFill];
        UIRectFill(rect);
        //利用贝塞尔路径裁切效果
        UIBezierPath *path = [UIBezierPath bezierPathWithOvalInRect:rect];
        //裁切
        [path addClip];
        
        //绘制图像
        [self drawInRect:rect];
        
        //取得结果
        UIImage *result = UIGraphicsGetImageFromCurrentImageContext();
        //关闭上下文
        UIGraphicsEndImageContext();
        
        //回到主线程
        dispatch_async(dispatch_get_main_queue(), ^{
            if (completion) {
                completion(result);
            }
        });
    });
}

@end
