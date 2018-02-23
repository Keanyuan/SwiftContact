//
//  CoreDataManager.swift
//  CoreDataStu
//
//  Created by KeanQ on 2018/2/23.
//  Copyright © 2018年 anji-allways. All rights reserved.
//

import UIKit
import CoreData

/// 本地数据库管理类：默认是写在AppDelegate的，可以这样分离出来
class CoreDataManager {
    //单例
    static let shareInstance: CoreDataManager = CoreDataManager()
    private init(){}
    
    
    // MARK: - Core Data stack 懒加载 核心数据堆栈
    //保存SqLite数据库文件的URL
    lazy var applicationDocumentsDirectory: NSURL = {
        let urls = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
        print("\(urls[urls.count-1])")
        return urls[urls.count - 1] as NSURL
    }()
    
    //管理对象模型
    lazy var managedObjectModel: NSManagedObjectModel = {
        //应用程序的托管对象模型
        let modelURL = Bundle.main.url(forResource: "HistoryCore", withExtension: "momd")!
        return NSManagedObjectModel(contentsOf: modelURL)!
    }()
    
    
    //持久化存储协调器
    lazy var persistentStoreCoordinator: NSPersistentStoreCoordinator = {
        // 创建并返回一个协调器，为应用程序添加了存储
        // 创建协调器和存储
        let coordinator = NSPersistentStoreCoordinator(managedObjectModel: self.managedObjectModel)
        let url = self.applicationDocumentsDirectory.appendingPathComponent("SingleViewCoreData.sqlite")
        var failureReason = "创建或保存数据库出错."
        do {
            let dict = [
                NSMigratePersistentStoresAutomaticallyOption: true,
                NSInferMappingModelAutomaticallyOption: true
            ]
            // 添加数据库
            // 参数1：数据存储类型
            // 参数3：保存SqLite数据库文件的URL
            // 参数4：设置数据库选项
            try coordinator.addPersistentStore(ofType: NSSQLiteStoreType, configurationName: nil, at: url, options: dict)
        } catch {
            // Report any error we got.
            var dict = [String: AnyObject]()
            dict[NSLocalizedDescriptionKey] = "未能初始化应用程序保存的数据" as AnyObject
            dict[NSLocalizedFailureReasonErrorKey] = failureReason as AnyObject
            
            dict[NSUnderlyingErrorKey] = error as NSError
            let wrappedError = NSError(domain: "YOUR_ERROR_DOMAIN", code: 9999, userInfo: dict)
            // 用代码替换它以适当地处理错误。.
            // abort()导致应用程序生成崩溃日志并终止.
            NSLog("Unresolved error \(wrappedError), \(wrappedError.userInfo)")
            abort()
        }
        
        return coordinator
    }()
    
    // 管理对象上下文
    lazy var managedObjectContext: NSManagedObjectContext = {
        //返回应用程序的托管对象上下文(已经绑定到应用程序的持久性存储协调器).
        let coordinator = self.persistentStoreCoordinator
        var managedObjectContext = NSManagedObjectContext(concurrencyType: .mainQueueConcurrencyType)
        managedObjectContext.persistentStoreCoordinator = coordinator
        return managedObjectContext
    }()
    
    // MARK: - Core Data Saving support 核心数据储蓄支持
    // 保存上下文
    func saveContext () {
        // 事务：可以保存多个数据，不一定每次数据发生变化都需要保存，可以一次性保存
        if managedObjectContext.hasChanges {
            do {
                try managedObjectContext.save()
            } catch {
                let nserror = error as NSError
                NSLog("Unresolved error \(nserror), \(nserror.userInfo)")
                abort()
            }
        }
    }
    
}
