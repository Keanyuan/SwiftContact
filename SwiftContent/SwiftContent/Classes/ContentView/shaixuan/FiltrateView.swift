//
//  FiltrateView.swift
//  SwiftContent
//
//  Created by Kean on 2017/6/25.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit
/// 动画时长
private let kAnimationDuration = 0.25

class FiltrateView: UIView {

    class func show(){
        let filtrateView = FiltrateView()
        filtrateView.frame = UIScreen.main.bounds
        filtrateView.backgroundColor = UIColor(red: 0/255.0, green: 0/255.0, blue: 0/255.0, alpha: 0.6)
        let window = UIApplication.shared.keyWindow
        window?.addSubview(filtrateView)

    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupUI()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        UIView.animate(withDuration: kAnimationDuration) { 
            self.bgView.x = SCREENW - self.bgView.width
        }
    }
    
    
    fileprivate func setupUI(){
        addSubview(bgView)
        
        bgView.addSubview(filtrateView)
        
        filtrateView.snp.makeConstraints { (make) in
            make.top.right.bottom.equalTo(bgView)
            make.width.equalTo(bgView).multipliedBy(0.8)
        }
    }
    
    
    private lazy var bgView:UIView = {
        let bgView = UIView()
        bgView.frame = CGRect(x: SCREENW, y: 0, width: SCREENW, height: SCREENH)
        return bgView
    }()
    
    
    private lazy var filtrateView:UIView = {
        let filtrateView = UIView()
        filtrateView.backgroundColor = UIColor.white
        filtrateView.isUserInteractionEnabled = true
        return filtrateView
    }()
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        cancleBtnClick()
    }
    
    func cancleBtnClick(){
        UIView.animate(withDuration: kAnimationDuration, animations: { 
            self.bgView.x = SCREENW
        }) { (_) in
            self.removeFromSuperview()
        }
    }
    
    
}
