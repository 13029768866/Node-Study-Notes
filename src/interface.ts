// let add: (x:number,y: number) => number

// 接口方式定义
/*interface  Add {
    (x: number, y: number): number
}*/

// 函数关键字
type Add = (x: number, y: number) => number

let add : Add(a, b) => a + b

// 混合类型
interface Lib {
    ():void;
    version: string;
    doSomething(): void;
}

function getLib(){
    // 类型断言
    let lib: Lib = (() => {}) as Lib
    lib.version = '1.0'
    lib.doSomething = () => {}
    return lib;
}

//  创建实例
let lib1 = getLib()
lib1.doSomething()
let lib2 = getLib()
lib2.doSomething()
