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
// 可选参数后面不能放必选参数（即可选参数必须放在最后面）
/*function  add5(x:number, y?:number,z: any) {
    return y? x + y: x;
}*/
