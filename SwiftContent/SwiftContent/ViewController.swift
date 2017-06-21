//
//  ViewController.swift
//  SwiftContent
//
//  Created by 祁志远 on 2017/6/15.
//  Copyright © 2017年 祁志远. All rights reserved.
//

import UIKit

let rowAndColumn : Int = 7


class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
//        setBlackjackCard()
        printIntegerKinds([3, 10, -20, -10, 0, 9, -3])
//        let  imageView = UIImageView()
//        let image = UIImage(named: "")
//        image?.ld_imageCornerSize(with: (image?.size)!, fill: UIColor.white, completion: { (imageName) in
//            imageView.image = imageName
//        })
        
        
        // Do any additional setup after loading the view, typically from a nib.
        
//        gameDice()
        masterE()
        
    }
    
    


}


//MARK: -- 方法扩展

extension ViewController {
    fileprivate func masterE(){
        let murrayTheHamster = Hamster(name: "Murray")
        let morganTheHamster = Hamster(name: "Morgan")
        let mauriceTheHamster = Hamster(name: "Maurice")
        let hamsters = [murrayTheHamster, morganTheHamster, mauriceTheHamster]
        print(hamsters.textualDescription)
        //如果多个协议扩展都为同一个协议要求提供了默认实现，而遵循协议的类型又同时满足这些协议扩展的限制条件，那么将会使用限制条件最多的那个协议扩展提供的默认实现。

    }
    
    fileprivate func gameDice(){
        let tracker = DiceGameTracker()
        let game = SnakesAndLadders()
        game.delegate = tracker
        game.play()
        printLog(game.textualDescription)
        
        
        let d12 = Dice(sides: 12, generator: LinearCongruentialGenerator())
        printLog(d12.textualDescription)
        printLog(game.prettyTextualDescription)
        
        
        let sy = SyntheticProtocol()
        let bir = Prosition(name: "MSF", age: 21)
        sy.wishHappyBirthday(to: bir)
    }
    
    fileprivate func generatorNum() {
        let gener = LinearCongruentialGenerator()
        printLog("Here's a random number: \(gener.random())")
        printLog("And another one: \(gener.random())")
        
        
        var d6 = Dice(sides: 6, generator: LinearCongruentialGenerator())
        for _ in 1...5 {
            printLog("Random dice roll is \(d6.roll())")
        }
        


        
    }
    
    //返回数字符号
    fileprivate func printIntegerKinds(_ numbers: [Int]) {
        for number in numbers {
            switch number.kind {
            case .Negative:
                print("- ", terminator: "")
            case .Zero:
                print("0 ", terminator: "")
            default:
                print("+ ", terminator: "")
            }
        }
    }

    
    fileprivate func setBlackjackCard(){
        let theAceOfSpades = BlackjackCard(rank: .Ace, suit: .Spades)
        printLog("theAceOfSpades: \(theAceOfSpades.description)")
        
        let heartsSymbol = BlackjackCard.SuitE.Hearts.rawValue
        printLog("红色桃心符号为: \(heartsSymbol)")

        
        let oneInce = 25.4.km
        printLog("One km is \(oneInce) meters")
        
        2.repetitions {
            printLog("Int 扩展 ： 重复次数")
        }
        
        var sI = 3
        sI.square()
        printLog(sI)
        
        printLog(32144121[10])
        
        
    }
    
    fileprivate func setProcessingError(){
        let favoriteSnacks = [
            "Alice": "Chips",
            "Bob": "Licorice",
            "Eve": "Pretzels",
            ]
        
        func buyFavoriteSnack(person: String, vendingMachine: VendingMachine) throws {
            let snackName = favoriteSnacks[person] ?? "Candy Bar"
            try vendingMachine.vend(itemName: snackName)
        }
        
        
    }
    
    
    fileprivate func setOptionE(){
        //        let heading = HTMLElement(name: "h1")
        //        let defaultText = "some default text"
        //        heading.asHTML = {
        //            return "<\(heading.name)>\(heading.text ?? defaultText)</\(heading.name)>"
        //        }
        //        print(heading.asHTML())
        //        var paragraph: HTMLElement? = HTMLElement(name: "p", text: "hello, world")
        //        print(paragraph!.asHTML())
        
        let john = Person()
        let johnsHouse = Residence()
        johnsHouse.rooms.append(Room(name: "Living Room"))
        johnsHouse.rooms.append(Room(name: "Kitchen"))
        john.residence = johnsHouse
        
        if let firstRoomName = john.residence?[0].name {
            print("The first room name is \(firstRoomName).")
        } else {
            print("Unable to retrieve the first room name.")
        }
        
        let johnsAddress = Address()
        johnsAddress.buildingName = "The Larches"
        johnsAddress.street = "Laurel Street"
        john.residence?.address = johnsAddress
        
        if let johnsStreet = john.residence?.address?.street {
            print("John's street name is \(johnsStreet).")
        } else {
            print("Unable to retrieve the address.")
        }
        
        if let buildingIdentifier = john.residence?.address?.buildingIdentifier() {
            print("John's building identifier is \(buildingIdentifier).")
        }
        
        if let beginsWithThe =
            john.residence?.address?.buildingIdentifier()?.hasPrefix("The") {
            if beginsWithThe {
                print("John's building identifier begins with \"The\".")
            } else {
                print("John's building identifier does not begin with \"The\".")
            }
        }

    }
    
    fileprivate func setPlayers(){
        var playerOne: Players? = Players(coins: 100)
        print("A new player has joined the game with \(playerOne!.coinsInPurse) coins")
        // 打印 "A new player has joined the game with 100 coins"
        print("There are now \(Bank.coinsInBank) coins left in the bank")
        playerOne!.win(coins: 2_000)
        print("PlayerOne won 2000 coins & now has \(playerOne!.coinsInPurse) coins")
        // 输出 "PlayerOne won 2000 coins & now has 2100 coins"
        print("The bank now only has \(Bank.coinsInBank) coins left")

    }
    
    fileprivate func setCheckerBoard(){
        let finalSquare = (rowAndColumn+1) * (rowAndColumn+1)
        var board = [Int](repeating: 0, count: finalSquare)
        
        let boardColor = Checkerboard()
        
        for row in 0...rowAndColumn{
            for column in 0...rowAndColumn {
                let bcolor = boardColor.squareIsBlackAtRow(row: row, column: column)
                var bNum = 0
                
                if bcolor {
                    bNum = 1
                } else {
                    bNum = 0
                }
                printLog(row*8 + column)
                board[row*8 + column] = bNum
            }
        }
        
        printLog(board)
        
        var cycleArr = [[Int]]()
        var arr = [Int]()
        
        for row in 0...rowAndColumn{
            for column in 0...rowAndColumn {
                arr.append(board[row*(rowAndColumn+1) + column])
                if column == rowAndColumn {
                    cycleArr.append(arr)
                    arr.removeAll()
                    printLog(cycleArr[row])
                }
            }
        }
    }
    
    
    fileprivate func setAnimal(){
        let someCreat = Animal(species: "")
        if let giraffe = someCreat {
            printLog("An animal was initialized with a species of \(giraffe.species)")
        }
        
        if someCreat == nil {
            printLog("The anonymous creature could not be initialized")
        }
        
        //可以利用该可失败构造器在三个枚举成员中获取一个相匹配的枚举成员，当参数的值不能与任何枚举成员相匹配时，则构造失败：
        let faher = TemperatureUnit(symbol: "L")
        if faher != nil {
            printLog("构造成功.")
        }
        
        if faher == nil {
            printLog("构造失败")
        }
        
        //带原始值的枚举类型会自带一个可失败构造器init?(rawValue:)，该可失败构造器有一个名为rawValue的参数，其类型和枚举类型的原始值类型一致，如果该参数的值能够和某个枚举成员的原始值匹配，则该构造器会构造相应的枚举成员，否则构造失败。
        let fa = TemperatureUnitE(rawValue: "L")
        if fa != nil {
            printLog("构造成功")
        }
        
        if fa == nil {
            printLog("构造失败")
        }
        
        if let zeroShirts = CartItem(name: "shirt", quantity: 0) {
            print("构造成功 Item: \(zeroShirts.name), quantity: \(zeroShirts.quantity)")
        } else {
            print("构造失败")
        }
        
        
    }
    fileprivate func setConstructor(){
//        let oneMysItm = RecipeIngredient()
        
//        let oneBacon = RecipeIngredient(name: "Bacon")
//        let sixEggs = RecipeIngredient(name: "Eggs", quantity: 6)
        
        var breakfastList = [ShoppingListItem(),
                             ShoppingListItem(name: "Bacon"),
                             ShoppingListItem(name: "Eggs", quantity: 6)
                             ]
        breakfastList[0].name = "Orange juice"
        breakfastList[0].purchased = true
        for item in breakfastList {
            printLog(item.description)
        }
    }
    
    fileprivate func setVehice(){
        let someVehicle = Vehicle()
        printLog("Vehicle: \(someVehicle.description)")
        
        let bicycle = Bicycle()
        bicycle.hasBasket = true
        bicycle.currentSpeed = 50.0
        printLog("Bicycle: \(bicycle.description)")
        bicycle.makeNoise()
        
        let tandem = Tandem()
        tandem.hasBasket = true
        tandem.currentSpeed = 45.0
        tandem.currentNumberOfPassengers = 3
        printLog("Tandem: \(tandem.description)")
        
    }
    
    fileprivate func setMatrix() {
        var matrix = Matrix(rows: 2, columns: 2)
        matrix[0, 1] = 1.5
        matrix[1, 0] = 3.2
        printLog(matrix)
    }
    
    fileprivate func ca() {
        //不能在结构体类型的常量（a constant of structure type）上调用可变方法，因为其属性不能被改变，即使属性是变量属性，详情参见常量结构体的存储属性：
        var leftChannel = AudioChannel(x: 1.0, y: 1.0, currentLevel: 7)
        var rightChannel = AudioChannel()
        leftChannel.currentLevel = 7
        printLog(leftChannel.currentLevel)
        printLog(AudioChannel.maxInputLevelForAllChannels)
        leftChannel.moveByX(deltaX: 2.0, y: 3.0)
        printLog("x== \(leftChannel.x)" + " y== \(leftChannel.y)")
        rightChannel.currentLevel = 11
        printLog(rightChannel.currentLevel)
        printLog(AudioChannel.maxInputLevelForAllChannels)
        
        
        var player = Player(name: "Argyrios")
        player.complete(level: 1)
        printLog("highest unlocked level is now \(LevelTracker.highestUnlockLevel)")
        player = Player(name: "Beto")
        if player.tracker.advance(to: 6) {
            printLog("player is now on level 6")
        } else {
            printLog("level 6 has not yet been unlocked")
        }
        
        
        let threeTimesTable = TimesTable(multiplier: 3)
        printLog("six times three is \(threeTimesTable[6])")
        //上面演示的threeTimesTable[6]。这条语句查询了3的乘法表中的第六个元素，返回3的6倍即18
    }
    
    fileprivate func canThrowAnError() throws {
        // 这个函数有可能抛出错误
        var someInt = 3
        var anotherInt = 107
        swap(&someInt, &anotherInt)
        // someInt 现在 107, and anotherInt 现在 3
        print("\(someInt) " + "\(anotherInt)")
        
        var someString = "hello"
        var anotherString = "world"
        swap(&someString, &anotherString)
        print("\(someString) " + "\(anotherString)")
        // someString 现在 "world", and anotherString 现在 "hello"
        
        
        let strings = ["cat", "dog", "llama", "parakeet", "terrapin"]
        
        if let foundIndex : [String : String] = findIndex(ofString: "llama", in: strings) {
            print("The index of llama is \(foundIndex)")
        }
        
    }
    
    
    
    
    func anyCommonElements<T: Sequence, U: Sequence>(_ lhs: T, _ rhs: U) -> Bool
        where T.Iterator.Element: Equatable, T.Iterator.Element == U.Iterator.Element {
            for lhsItem in lhs {
                for rhsItem in rhs {
                    if lhsItem == rhsItem {
                        return true
                    }
                }
            }
            return false
    }
    
    func enmuTest() {
        
        //        let ace = Rank.Six
        //        let aceRawValue = ace.rawValue
        //        if let convertedRank = Rank(rawValue: 3) {
        //            let threeDescription = convertedRank.simpleDescription()
        //            print(threeDescription)
        //        }
        //        print("\(aceRawValue)   "  + "\(ace)")
        
        
        //        let hearts = Suit.Hearts
        //        let heartsDescription = hearts.simpleDescription()
        //        print("\(hearts)  " + "\(heartsDescription)")
        //
        
        //
        //        let success = ServerResponse.Result("6:00 am", "8:09 pm")
        //        let failure = ServerResponse.Failure("Out of cheese.")
        //        let codeRce = ServerResponse.codeRce("default……")
        //
        //        switch codeRce {
        //        case let .Result(sunrise, sunset):
        //            let serverResponse = "Sunrise is at \(sunrise) and sunset is at \(sunset)."
        //            print(serverResponse)
        //        case let .Failure(message):
        //            print("Failure...  \(message)")
        //        case let .codeRce(code):
        //            print("\(code)")
        //        }
        
        //        let threeOfSpades = Card(rank: .Three, suit: .Spades)
        //        let threeOfSpadesDescription = threeOfSpades.simpleDescription()
        //
        //        print("\(threeOfSpadesDescription)")
        //        SimpleStructure.setSimpleStructure()
        //        print(7.simpleDescription)
        print(repeatItem(repeating: "knock", numberOfTimes:4))
        
        //        enmuTest()
        //        print(anyCommonElements([1,2,3], [4]))
        
        
        //        do {
        //            try canThrowAnError()
        //            // 没有错误消息抛出
        //        } catch {
        //            // 有一个错误消息抛出
        //        }

        
    }
    
    func equilateralTriangle(){
        let triangle = EquilateralTriangle(sideLength: 3.1, name: "a triangle")
        print(triangle.perimeter)
        triangle.perimeter = 9.9
        print(triangle.sideLength)
        print(triangle.simpleDescription())
        
    }
    
    func triangAndSquare() {
        let triangleAndSquare = TriangleAndSquare(size: 10, name: "another test shape")
        print(triangleAndSquare.square.sideLength)
        print(triangleAndSquare.triangle.sideLength)
        triangleAndSquare.square = Square(sideLength: 50, name: "larger square")
        print(triangleAndSquare.triangle.sideLength)
    }
    
    func reportGenericity<Put>(_ put: Put) -> [Put] {
        var result = [Put]()
        for _ in 0...5{
            result.append(put)
        }
        return result
    }
    
    func repeatItem<Item>(repeating item: Item, numberOfTimes: Int) -> [Item] {
        var result = [Item]()
        for _ in 0..<numberOfTimes {
            result.append(item)
        }
        return result
    }

}


extension ViewController {
    
    //类型必须相同
    //数据交换 使用输入输出参数（inout）来交换 a 和 b 的值
    fileprivate func swapTwoInts(_ a: inout Int, _ b: inout Int){
        let tempA = a
        a = b
        b = tempA
        
    }
    
    func swapTwoStrings(_ a: inout String, _ b: inout String) {
        let temporaryA = a
        a = b
        b = temporaryA
    }
    
    fileprivate func swapTwoDoubles(_ a: inout Double, _ b: inout Double) {
        let temporaryA = a
        a = b
        b = temporaryA
    }
    
    //使用于任何版本的泛型
    fileprivate func swapTwoValues<T>(_ a: inout T, _ b: inout T){
        let temp = a
        a  = b
        b = temp
    }
    
    //Equatable协议 该协议要求任何遵循该协议的类型必须实现等式符（==）及不等符(!=)，从而能对该类型的任意两个值进行比较
    fileprivate func findIndex<T:Equatable>(ofString valueToFind: T, in array: [T]) ->[String : T]? {
        
        for (index, value) in array.enumerated() {
            if value == valueToFind {
                return ["\(index)" : value]
            }
        }
        return ["" : T.self] as? [String : T]
    }
}

