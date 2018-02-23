//
//  SearchStudentForOrder.swift
//  CoreDataStu
//
//  Created by KeanQ on 2018/2/23.
//  Copyright © 2018年 anji-allways. All rights reserved.
//

import UIKit
import Foundation
import CoreData

class SearchStudentForOrder: NSManagedObject {
    // Insert code here to add functionality to your managed object subclass
    /*
     一般涉及到的情况有：增删改，单对象查询，分页查询（所有，条件查询，排序），对象是否存在，批量增加，批量修改
     */
    
    /// 判断对象是否存在, obj参数是当前属性的字典
    class func exsitsObject(obj:[String:String]) -> Bool {
        
        //获取管理数据对象的上下文
        let context = CoreDataManager.shareInstance.managedObjectContext
        //声明一个数据请求
        let fetchRequest = NSFetchRequest<NSFetchRequestResult>(entityName: "Student")
        
        //组合过滤参数
        let stuId = obj["stuId"]
        let name = obj["name"]
        
        //方式一
        let predicate1 = NSPredicate(format: "stuId = %@", stuId!)
        let predicate2 = NSPredicate(format: "name = %@", name!)
        //合成过滤条件
        //or ,and, not , 意思是：或与非，懂数据库的同学应该就很容易明白
        let predicate = NSCompoundPredicate(orPredicateWithSubpredicates: [predicate1,predicate2])
        //let predicate = NSCompoundPredicate(andPredicateWithSubpredicates: [predicate1,predicate2])
        fetchRequest.predicate = predicate
        
        //方式二
        //fetchRequest.predicate = NSPredicate(format: "stuId = %@ or name = %@", stuId!, name!)
        //fetchRequest.predicate = NSPredicate(format: "stuId = %@ and name = %@", stuId!, name!)
        
        do{
            let fetchObjects:[AnyObject]? = try context.fetch(fetchRequest) as [AnyObject]
            let count = fetchObjects?.count
            
            return count! > 0 ? true : false
        }catch {
            fatalError("exsitsObject \(error)")
        }
        
        return false
    }
    
    /// 添加对象, obj参数是当前属性的字典
    class func insertObject(obj: [String:String]) -> Bool {
        
        //如果存在对象了就返回
        if exsitsObject(obj: obj) {
            return false
        }
        
        //获取管理的数据上下文 对象
        let context = CoreDataManager.shareInstance.managedObjectContext
        
        //创建学生对象
        let stu = NSEntityDescription.insertNewObject(forEntityName: "Student",
                                                      into: context) as! Student
        
        //对象赋值
        let sexStr:String
        if obj["sex"] == "男"{
            sexStr = "1"
        }else{
            sexStr = "0"
        }
        let numberFMT = NumberFormatter()
        numberFMT.numberStyle = .none
        stu.stuId = obj["stuId"]!
        //        stu.name = obj["name"]
        stu.name = obj["name"]
        stu.createtime = Date()
        stu.sex = sexStr
        stu.classId = obj["classId"]!
        
        //保存
        do {
            try context.save()
            print("保存成功！")
            return true
        } catch {
            fatalError("不能保存：\(error)")
        }
        return false
    }
    
    /// 删除对象
    class func deleteObject(obj:Student) -> Bool{
        
        //获取管理的数据上下文 对象
        let context = CoreDataManager.shareInstance.managedObjectContext
        
        //方式一: 比如说列表已经是从数据库中获取的对象，直接调用CoreData默认的删除方法
        context.delete(obj)
        CoreDataManager.shareInstance.saveContext()
        
        //方式二：通过obj参数比如：id,name ,通过这样的条件去查询一个对象一个，把这个对象从数据库中删除
        //代码：略
        
        return true
    }
    
    /// 更新对象
    class func updateObject(obj:[String: String]) -> Bool {
        //obj参数说明：当前对象的要更新的字段信息，唯一标志是必须的，其他的是可选属性
        let context = CoreDataManager.shareInstance.managedObjectContext
        
        
        guard let oid = obj["stuId"] else {
            return false
        }
        if oid.count == 0 {
            return false
        }
        guard let student:Student = self.fetchObjectById(oid: Int(oid)!) as? Student else {
            return false
        }
        
        //遍历参数，然后替换相应的参数
        let numberFMT = NumberFormatter()
        numberFMT.numberStyle = .none
        
        for key in obj.keys {
            switch key {
            case "name":
                student.name = obj["name"]
            case "classId":
                student.classId = obj["classId"]
            case "sex":
                let sexStr:String
                if obj["sex"] == "男"{
                    sexStr = "1"
                }else{
                    sexStr = "0"
                }
                student.sex = sexStr
            default:
                print("如果有其他参数需要修改，类似")
            }
        }
        
        //执行更新操作
        do {
            try context.save()
            print("更新成功！")
            return true
        } catch {
            fatalError("不能保存：\(error)")
        }
        
        return false
    }
    
    /// 查询对象
    class func fetchObjects(pageIndex:Int, pageSize:Int) -> [AnyObject]? {
        //获取管理的数据上下文 对象
        let context = CoreDataManager.shareInstance.managedObjectContext
        
        //声明数据的请求
        let fetchRequest:NSFetchRequest<NSFetchRequestResult> = NSFetchRequest(entityName: "Student")
        
        fetchRequest.fetchLimit = pageSize //每页大小
        fetchRequest.fetchOffset = pageIndex * pageSize //第几页
        
        //设置查询条件:参考exsitsObject
        //let predicate = NSPredicate(format: "id= '1' ", "")
        //fetchRequest.predicate = predicate
        
        //设置排序
        //按学生ID降序
        let stuIdSort = NSSortDescriptor(key: "stuId", ascending: false)
        //按照姓名升序
        let nameSort = NSSortDescriptor(key: "name", ascending: true)
        let sortDescriptors:[NSSortDescriptor] = [stuIdSort,nameSort]
        fetchRequest.sortDescriptors = sortDescriptors
        
        //查询操作
        do {
            let fetchedObjects:[AnyObject]? = try context.fetch(fetchRequest) as [AnyObject]
            
            //遍历查询的结果
            for info:Student in fetchedObjects as! [Student]{
                print("id=\(info.stuId!)")
                print("name=\(info.name!)")
                print("sex=\(info.sex!)")
                print("classId=\(info.classId!)")
                print("createTime=\(info.createtime!)")
                print("-------------------")
                
            }
            return fetchedObjects
        }
        catch {
            fatalError("不能保存：\(error)")
        }
        return nil
    }
    
    /// 根据ID查询当个对象
    class func fetchObjectById(oid:Int) -> AnyObject?{
        
        //获取上下文对象
        let context = CoreDataManager.shareInstance.managedObjectContext
        
        //创建查询对象
        let fetchRequest:NSFetchRequest<NSFetchRequestResult> = NSFetchRequest(entityName: "Student")

        //构造参数
        fetchRequest.predicate = NSPredicate(format: "stuId = %@", "\(oid)")
        
        //执行代码并返回结果
        do{
            let results:[AnyObject]? = try context.fetch(fetchRequest) as [AnyObject]
            
            if (results?.count)! > 0 {
                return results![0]
            }
        }catch{
            fatalError("查询当个对象致命错误：\(error)")
        }
        
        return nil
    }
}
