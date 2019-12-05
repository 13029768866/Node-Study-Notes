/*class Dog{
    constructor(name: string){
        this.name = name
    }
    public name: string
    run() {}
}*/

console.log(Dog.prototype) // 只包括run方法和constructor属性
let dog = new Dog('dd')
console.log(dog) // 属性只存在实例上不存在圆形上，且必须赋默认值

// 继承
class Husky extends Dog{
    constructor(name: string, public color: string){
        super(name)
        this.color = color
    }
    // color: string
}


// 成员修饰符
class Dog{
    // private 既不能实例化，也不能继承
    // protected 不能实例化，只能继承
    private constructor(name: string){
        this.name = name
    }
    // public对所有人可见
    public name: string
    run() {}
    // private 只可以本身调用，不能实例或者子类调用
    private pri() {}
    // protected 受保护成员（实例不可调用，类或子类调用）
    protected pro() {}
    // readonly 不可更改，必须实例化
    readonly legs: number = 4
}
// dog.pri() //

// 受保护成员
