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
    constructor(name: string, color: string){
        super(name)
        this.color = color
    }
    color: string
}


// 修饰符
class Dog{
    constructor(name: string){
        this.name = name
    }
    public name: string
    run() {}
    private pro() {}
}

