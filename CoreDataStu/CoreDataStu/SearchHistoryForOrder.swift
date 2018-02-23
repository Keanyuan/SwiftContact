//
//  SearchHistoryForOrder.swift
//  CoreDataStu
//
//  Created by KeanQ on 2018/2/23.
//  Copyright © 2018年 anji-allways. All rights reserved.
//

import Foundation
import CoreData

class SearchHistoryForOrder: NSManagedObject {
    //添加对象, obj参数是当前属性的字典
    class func insertObject(_ obj: [String:String]) -> Bool {
        //获取管理的数据上下文 对象
        let context = CoreDataManager.shareInstance.managedObjectContext
        //创建对象
        let searchOder = NSEntityDescription.insertNewObject(forEntityName: "SearchHistory", into: context) as! SearchHistory
        //对象赋值
        searchOder.historyKey = obj["key"]
        //当前时间的时间戳
        let timeInterval: TimeInterval = NSDate().timeIntervalSince1970
        searchOder.historyTime = Int32(timeInterval)
        //查询类型，这里赋值historyNumber
        searchOder.historyType = "historyNumber"
         //保存
        do {
            try context.save()
            print("保存成功 SearchHistoryForOrder")
            return true
        } catch  {
            fatalError("不能保存：\(error)")
        }
        return false
    }
    /// 查询对象
    // fetchLimit -- 每次获取多少个
    // fetchOffset -- 从第几个开始
    class func fetchObjects(fetchLimit : Int, fetchOffset : Int) -> [AnyObject]? {
        //获取管理的数据上下文 对象
        let context = CoreDataManager.shareInstance.managedObjectContext
        //声明数据的请求
        let fetchRequest:NSFetchRequest<NSFetchRequestResult> = NSFetchRequest(entityName: "SearchHistory")
        fetchRequest.fetchLimit = fetchLimit
        fetchRequest.fetchOffset = fetchOffset
        //设置查询条件
        let predicate1 = NSPredicate(format: "historyType = %@", "historyNumber")
        //合成过滤条件
        //or ,and, not , 意思是：或与非，懂数据库的同学应该就很容易明白
        let predicate = NSCompoundPredicate(orPredicateWithSubpredicates: [predicate1])
        fetchRequest.predicate = predicate
        //按查询时间降序
        let searchtimeSort = NSSortDescriptor(key: "historyTime", ascending: false)
        let sortDescriptors:[NSSortDescriptor] = [searchtimeSort]
        fetchRequest.sortDescriptors = sortDescriptors
        //查询操作
        do {
            let fetchedObjects:[AnyObject]? = try context.fetch(fetchRequest) as [AnyObject]
            
            //遍历查询的结果
            for info:SearchHistory in fetchedObjects as! [SearchHistory]{
                print("historyKey=\(String(describing: info.historyKey))")
                print("historyTime=\(info.historyTime)")
                print("-------------------")
            }
            return fetchedObjects
        }
        catch {
            fatalError("不能保存：\(error)")
        }
        return nil
    }
    /// 删除所有历史搜索订单对象
    class func deleteObject(completeCallBack : @escaping (_ result : Bool) -> ()){
        //获取管理的数据上下文 对象
        let context = CoreDataManager.shareInstance.managedObjectContext
        
        //声明数据的请求，声明一个实体结构
        let fetchRequest = NSFetchRequest<NSFetchRequestResult>(entityName: "SearchHistory")
        
        // 异步请求由两部分组成：普通的request和completion handler
        // 返回结果在finalResult中
        let asyncFetchRequest = NSAsynchronousFetchRequest(fetchRequest: fetchRequest) { (result:NSAsynchronousFetchResult) in
            
            //对返回的数据做处理。
            let fetchObject = result.finalResult! as! [SearchHistory]
            
            //遍历查询的结果
            for info:SearchHistory in fetchObject {
                print("historyTime=\(String(describing: info.historyKey))")
                print("historyTime=\(info.historyTime)")
                print("-------------------")
                //所有删除信息
                context.delete(info)
            }
            
            //保存
            do {
                try context.save()
                completeCallBack(true)
            } catch {
                completeCallBack(false)
            }
        }
        
        // 执行异步请求调用execute
        do {
            try context.execute(asyncFetchRequest)
        } catch  {
            print("error")
        }
    }
}

