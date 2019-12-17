let add: (x: number, y:number) => number
interface Add {
    (x: number,y: number): number
}

// 类型别名
type Add = (x:number, y:number) => number

let add: Add = (a, b) => a + b

/*混合接口*/
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}
function getLibInstance() {
    let lib: Lib = (() => {}) as Lib;
    lib.version = "1.0";
    lib.doSomething = () => {};
    return lib;
}