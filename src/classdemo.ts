// 抽象类
// 只可以继承，不能实例化
// 抽象类的多态
abstract class Animal {
    eat(){
        console.log("eat")
    }
    abstract sleep(): void;
}
// let animal = new Animal()

class Dog extends Animal{
    constructor(name:string){
        super()
        this.name = name
    }
    name: string;
    run() {};
    sleep(){
        console.log("Dog sleep")
    }
}
let dog = new Dog('zzd')
dog.eat()

// 多态实现
class Cat extends Animal{
    sleep(){
        console.log("Cat sleep")
    }
}
let cat = new Cat()

let animals: Animal[] = [dog, cat]

animals.forEach(item => {
    item.sleep()
})

class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}
new WorkFlow().step1().step2()

class MyFLow extends WorkFlow{
    next() {
        return this;
    }
}
// 属性是实例属性，方法是原型方法
// let dog = new Dog('wangwang')
/*console.log(dog.name)
console.log(Dog.prototype)*/
// console.log(dog.wzj)


// 类的继承
/*class DogSon extends Dog{
    constructor (name: string,color: string) {
        // super 父类的实例
        super(name)
        this.color = color;
    }
    color: string
}*/



// 类修饰符
/*
* 1、public 共有盛有
* 2、private 私有成员
* 3、proteted 受保护成员
* 4、readonly 只读属性
* 5、static 静态成员
* */