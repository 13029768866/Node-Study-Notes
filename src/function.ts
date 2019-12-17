// 函数定义
// 形参实参一一对应
function add1(x:number, y:number){
    return x + y
}
let add2:(x:number, y:number) => number

interface add3 {
    (x:number, y:number): number
}

type add4 = (x:number, y:number) => number

// 必选参数在前，可选参数必须放在最后面
function add5(x:number, y?:number) {
    return y? x + y : x;
}

// 必选参数前面的默认值如果不传参，必须占位
function add6(x:number, y = 0, z: number, q = 1) {
    return x + y + z +q
}
add6(1,undefined,3)

// 剩余参数（类型数组）
function add7(x:number, ...rest: number[]) {
    return x + rest.reduce((pre,cur) => pre + cur)
}

// 函数重载
function add8(...rest: number[]):number;
function add8(...rest: string[]):string;
function add8(...rest: any[]):any{
    let first = rest[0];
    if(typeof first === "string"){
        return rest.join('')
    }
    if(typeof first === "number"){
        return rest.reduce((pre,cur) => pre + cur)
    }
}



