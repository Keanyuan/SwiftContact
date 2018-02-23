//
//  ViewController.swift
//  CoreDataStu
//
//  Created by KeanQ on 2018/2/23.
//  Copyright © 2018年 anji-allways. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    // 模型数组
    var modelArr = Array<Any>()
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    @IBOutlet weak var addBtn: UIButton!
    
    @IBOutlet weak var selectBtn: UIButton!
    
    @IBOutlet weak var deleteBtn: UIButton!
    
    
    @IBAction func addBtnClick(_ sender: UIButton) {
        //添加对象
        var dic = [String:String]()
        dic["key"] = "self.searchView?.inputLabel.text"
        if SearchHistoryForOrder.insertObject(dic) {
            addBtn.setTitle("添加成功", for: .normal)
        }else{
            addBtn.setTitle("添加失败", for: .normal)
        }
        self.getHistorySearch()
    }
    
    @IBAction func selectBtnClick(_ sender: UIButton) {
//        self.getHistorySearch()
        let searchVC = storyboardViewController(withIdentifier: "DFViewController") as! DFViewController
        self.navigationController?.pushViewController(searchVC, animated: true)
        
    }
    
    @IBAction func deleteBtnClick(_ sender: UIButton) {
        SearchHistoryForOrder.deleteObject(completeCallBack: {[weak self](result : Bool) in
            if result {
                self?.modelArr = SearchHistoryForOrder.fetchObjects(fetchLimit: 20,fetchOffset: 0)!
                self?.deleteBtn.setTitle("删除成功", for: .normal)
                //                weakself?.searchState = SearchState.searchNoInfo
            }else{
                self?.deleteBtn.setTitle("删除失败", for: .normal)
            }
            self?.getHistorySearch()
        })
    }
    
    func getHistorySearch(){
        self.modelArr = SearchHistoryForOrder.fetchObjects(fetchLimit: 20,fetchOffset: 0)!
        selectBtn.setTitle("查询（\(self.modelArr.count)）", for: .normal)
    }
    
    func storyboardViewController(withIdentifier identifier: String) -> UIViewController {
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        let VC = storyboard.instantiateViewController(withIdentifier: identifier)
        return VC
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

