
//
//  LPhotoBrowerController.swift
//  JSONSwift
//
//  Created by 祁志远 on 2017/7/5.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit
import Kingfisher
//ARKit 3DKit
//SceneKit 把模放上去
//Metal

private let reuseIdentifier = "PhotoCollectionViewCell"

class LPhotoBrowerController: UIViewController,UICollectionViewDelegate, UICollectionViewDataSource, UIAlertViewDelegate  {

    @IBOutlet weak var collectionView: UICollectionView!
    /// 1.0.1 数据源
    let bigUrlArray1_0_1: [Any?] = [
        "http://car0.autoimg.cn/upload/spec/5900/1024x0_1_q87_2011071303265437981.jpg",
        "http://car0.autoimg.cn/upload/spec/5900/1024x0_1_q87_2011071303245992681.jpg",
        "http://car0.autoimg.cn/upload/spec/6032/1024x0_1_q87_20101125144828435240.jpg",
        "http://car1.autoimg.cn/upload/spec/8550/1024x0_1_q87_20110604123334815123.jpg",
        "http://car1.autoimg.cn/upload/spec/6032/1024x0_1_q87_20101125144819544240.jpg",
        "http://img.bizhi.sogou.com/images/2015/05/25/1181600.jpg",
        "timg-1",
        "http://img1a.xgo-img.com.cn/pics/2153/b2152556.jpg",
        "http://4493bz.1985t.com/uploads/allimg/140826/3-140R6142K1.jpg",
        "timg-2",
        
        "timg-3",
        
        "timg-4",
                                     
        
        "http://4493bz.1985t.com/uploads/allimg/140825/3-140R5143303.jpg",
        
        "http://4493bz.1985t.com/uploads/allimg/140825/3-140R5142J3.jpg",
                                     
        
        UIImage(named: "timg-5"),
        
        UIImage(named: "timg-7"),
                                     
        
        "http://4493bz.1985t.com/uploads/allimg/140825/3-140R5115546.jpg",
        
        "http://4493bz.1985t.com/uploads/allimg/140823/3-140R3143405.jpg",
        
        "http://4493bz.1985t.com/uploads/allimg/140823/3-140R3141504.jpg",
                                     
        
        "http://4493bz.1985t.com/uploads/allimg/140823/3-140R3105544.jpg",
        
        "http://4493bz.1985t.com/uploads/allimg/140823/4-140R3103I0.jpg",
        
        "http://4493bz.1985t.com/uploads/allimg/141104/3-141104100544.jpg",
        
        "http://4493bz.1985t.com/uploads/allimg/141103/3-141103102212.jpg",
        
        "http://4493bz.1985t.com/uploads/allimg/141103/3-141103095639.jpg",
        
        "http://4493bz.1985t.com/uploads/allimg/141031/4-141031144339.jpg",
        
        "http://4493bz.1985t.com/uploads/allimg/141031/4-141031144104.jpg",
        
        "http://4493bz.1985t.com/uploads/allimg/141031/4-141031141938.jpg",
        
        "http://4493bz.1985t.com/uploads/allimg/141031/1-141031112U4.jpg",
        
        "http://4493bz.1985t.com/uploads/allimg/141030/3-141030104145.jpg",
        
        "http://4493bz.1985t.com/uploads/allimg/141027/3-14102F95609.jpg",
        
        "http://4493bz.1985t.com/uploads/allimg/141024/3-141024105111.jpg"]
    
    fileprivate var browser: LLPhotoBrowserViewController?
    
    override func viewDidLoad() {
        super.viewDidLoad()

        self.collectionView?.register(UINib.init(nibName: "PhotoCollectionViewCell", bundle: nil), forCellWithReuseIdentifier: reuseIdentifier )
        ImageCache.default.clearDiskCache()
        ImageCache.default.clearMemoryCache()
    }
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return bigUrlArray1_0_1.count
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell: PhotoCollectionViewCell = collectionView.dequeueReusableCell(withReuseIdentifier: reuseIdentifier, for: indexPath) as! PhotoCollectionViewCell

        let data = bigUrlArray1_0_1[indexPath.item]
        if data is UIImage {
            cell.imageView.image = data as? UIImage
        } else if data is String {
            if (data as! String).hasPrefix("http"){
                cell.imageView.kf.setImage(with: URL(string: data as! String)!)
            } else {
                cell.imageView.image = UIImage(named: data as! String)
            }
        }
        
        return cell
        
    }
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        //定义一个data数组
        var data: [LLBrowserModel] = []
        for index in 0..<bigUrlArray1_0_1.count {
            let cell: PhotoCollectionViewCell? = collectionView.cellForItem(at: IndexPath.init(row: index, section: 0)) as? PhotoCollectionViewCell
            let model = LLBrowserModel.init()
            model.data = bigUrlArray1_0_1[index]
            if let c = cell {
                model.sourceImageView = c.imageView
            }
            
            data.append(model)
        }
        
        browser = LLPhotoBrowserViewController(photoArray: data, currentIndex: indexPath.row, sheetTitileArray: ["分享给朋友","保存到相册"], isOpenQRCodeCheck: true) { (index, imageView, qrcodeString) in
            print("ActionSheet点击-->下标=\(index); ImageView:\(imageView); qrcodeString:\(String(describing: qrcodeString))")
            
            if let qrcode = qrcodeString {
                UIAlertView.init(title: "二维码地址", message: qrcode, delegate: self, cancelButtonTitle: "跳转").show()
            }
            
        }
        
        browser?.presentBrowserViewController()
        
        
    }

    /*
     if let qrCode = qrcodeString {
     let alertSheet = UIAlertController(title: "二维码地址", message: qrCode, preferredStyle: .alert)
     let queAction = UIAlertAction(title: "确认", style: .destructive, handler: { (_) in
     
     })
     alertSheet.addAction(queAction)
     self.present(alertSheet, animated: true, completion: nil)
     }

     */

}
