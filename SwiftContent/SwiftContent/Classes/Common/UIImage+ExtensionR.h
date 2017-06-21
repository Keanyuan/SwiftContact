//
//  UIImage+ExtensionR.h
//  AllwaysLogistics
//
//  Created by Kean on 2017/6/20.
//  Copyright © 2017年 Kean. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface UIImage (ExtensionR)

/**
 根据图像绘制圆角图像

 @param size 图像尺寸
 @param fillColor 圆角颜色
 @param completion 回调结果
 */
- (void)ld_imageCornerSizeWithSize:(CGSize)size fillColor:(UIColor *)fillColor completion:(void(^)(UIImage *))completion;
@end
