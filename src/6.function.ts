// 函数定义
//  第一种
function add1(x: number, y: number) {
    return x + y
}
//  第二种
let add2: (x: number, y: number) => number
// 第三章 type关键字
type add3 = (x:number, y: number) => number
// 第4种
interface  Add4 {
    (x: number, y: number): number
}

// 形参和实参必须一一对应
add1(1,2)

// 可选参数
function  add5(x:number, y?:number) {
    return y? x + y: x;
}
add5(1)
// 可选参数后面不能放必选参数（即可选参数必须放在最后面）
/*function  add5(x:number, y?:number,z: any) {
    return y? x + y: x;
}*/
function  add6(x:number, y = 0, z:number, q = 1) {
    return x + y + z + q;
}
// 必选参数z前的必须传入默认值undefind,必选参数z之后的可以不穿
// add6(1,3) // 5
add6(1,undefined,3) // 5

// 参数不确定,剩余参数
function add7(x:number, ...rest:number[]) {
    return x + rest.reduce((pre,cur) => pre + cur)
}
add7(1,2,3,4,5)

// 函数重载
function  add8(...rest: number[]): number;
function  add8(...rest: string[]): string;
function  add8(...rest: any[]): any{
    let first = rest[0]
    if(typeof first === "string"){
        return rest.join('')
    }
    if(typeof first === "number"){
        return rest.reduce((pre,cur) => pre + cur)
    }
};
