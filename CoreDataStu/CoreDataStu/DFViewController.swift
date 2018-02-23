//
//  DFViewController.swift
//  CoreDataStu
//
//  Created by KeanQ on 2018/2/23.
//  Copyright © 2018年 anji-allways. All rights reserved.
//

import UIKit

let cellIdentifiler = "ReuseCell"

class DFViewController: UIViewController {
    @IBOutlet weak var txtNo: UITextField!
    @IBOutlet weak var txtName: UITextField!
    @IBOutlet weak var txtSex: UITextField!
    @IBOutlet weak var txtClassId: UITextField!
    @IBOutlet weak var tableView: UITableView!
    var dataArray:[AnyObject]?

    override func viewDidLoad() {
        super.viewDidLoad()

        self.dataArray = SearchStudentForOrder.fetchObjects(pageIndex: 0, pageSize: 20)
        self.tableView.reloadData()
        
    }

    @IBAction func addAction(_ sender: UIButton) {
        
        var dic = [String:String]()
        
        dic["stuId"] = txtNo.text
        dic["name"] = txtName.text
        dic["sex"] = txtSex.text
        dic["classId"] = txtClassId.text
        
        if SearchStudentForOrder.insertObject(obj: dic) {
            print("添加成功")
            self.dataArray = SearchStudentForOrder.fetchObjects(pageIndex: 0,pageSize: 20)
            
            self.tableView.reloadData()
        }else{
            print("添加失败")
        }
    }
    @IBAction func updateAction(_ sender: UIButton) {
        
        var dic = [String:String]()
        
        dic["stuId"] = txtNo.text
        dic["name"] = txtName.text
        dic["sex"] = txtSex.text
        dic["classId"] = txtClassId.text
        
        if SearchStudentForOrder.updateObject(obj: dic) {
            print("更新成功")
            self.dataArray = SearchStudentForOrder.fetchObjects(pageIndex: 0,pageSize: 20)
            
            self.tableView.reloadData()
        }else{
            print("更新失败")
        }
        
    }
    

}

extension DFViewController:UITableViewDelegate,UITableViewDataSource{
    //表格有多少组

    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
 
    //每组多少行
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if self.dataArray != nil && (self.dataArray?.count)! > 0 {
            return self.dataArray!.count
        }
        return 0
    }
    
    
    //高度
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 50
    }
    //单元格加载
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: cellIdentifiler)
        
        let stu:Student = self.dataArray![indexPath.row] as! Student
        
        let label1:UILabel = cell?.contentView.viewWithTag(10001) as! UILabel
        let label2:UILabel = cell?.contentView.viewWithTag(10002) as! UILabel
        var sexStr = "男"
        if stu.sex == "0" {
            sexStr = "女"
        }
        label1.text = "\(stu.stuId!) \(stu.name!) \(sexStr) \(stu.classId!)"
        label2.text = "http://xiaopin.cnblogs.com"
        
        return cell!
    }
    
    
    //选中
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let stu:Student = self.dataArray![indexPath.row] as! Student
        var sexStr = "男"
        if stu.sex == "0" {
            sexStr = "女"
        }
        txtNo.text = stu.stuId
        txtName.text = stu.name
        txtSex.text = sexStr
        txtClassId.text = stu.classId
    }

    func tableView(_ tableView: UITableView, canEditRowAt indexPath: IndexPath) -> Bool {
        return true
    }
    
    func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        if editingStyle == .delete {
            //获取当前对象
            let student:Student = self.dataArray![indexPath.row] as! Student
            
            //删除本地存储
            let success = SearchStudentForOrder.deleteObject(obj: student)
            if success {
                //刷新数据源
                self.dataArray?.remove(at: indexPath.row)
                //self.dataArray = Student.fetchObjects(0, pageSize: 20)
                
                //删除单元格
                tableView.deleteRows(at: [indexPath], with: .automatic)
            }
        }
    }
    
    func tableView(_ tableView: UITableView, editingStyleForRowAt indexPath: IndexPath) -> UITableViewCellEditingStyle {
        return .delete
    }
    
    func tableView(_ tableView: UITableView, titleForDeleteConfirmationButtonForRowAt indexPath: IndexPath) -> String? {
        return "删除"
    }
}
