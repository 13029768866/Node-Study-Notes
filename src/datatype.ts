// 原始数据类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'wzj'
// 数组
let arr1: number[] = [1,2,3]
let arr2: Array<number | string> = [1,2,3,'wzj']

// 元组(类型数量必须对应)
// 可以添加，不可访问（不推荐越界操作）
let tuple: [number,string] = [0,"1"]
/* tuple.push(2)
console.log(tuple,tuple[2]) */

// 函数(括号之外是函数返回值的类型（可省略）)
let add = (x:number,y:number) : number => x + y
// 也可以先定义函数参数及其返回值类型，再书写函数逻辑
let compute : (x:number , y: number) => number
compute = (a,b) => a + b

// 对象(对象属性类型一一映射)
let obj: {x: number, y: number} = {x: 1,y: 2}
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)	// false

// undefined,null(是其他类型的子类型，可以赋值给其他变量)
// 需要修改tsconfig.json中strictNullChecks项为false
let un: undefined = undefined
let nu:	null = null
num = undefined

// void(没有任何返回值的函数)
let noReturn = () => {}

// any(不设置默认)
let x
x = 1
x = []
x = () => {}

//  never(永远不会有返回值)
/*
1、报错
2、死循环
 */
let error = () =>{
    throw new Error('error')
}
let endless = () => {
    while(true){}
}