// 抽象类,只能被继承不能实例化的类
abstract class  Animal {

}


class Dog1 extends Ani{
    constructor(name: string){
        this.name = name
    }
    name: string
    run() {}
}
let dog1 = new Dog1('wangwang')