interface List {
    readonly id: number;    // readonly 代表只读属性
    name: string;
    age?: number // ?:代表可选属性,表示可有可无
}
interface Result {
    data: List []
}
function render(result: Result){
    result.data.forEach((value => {
        console.log(value.id, value.name)
        if(value.age){
            console.log(value.age)
        }
    }))
}

let result = {
    data: [
        {id: 1, name:'wzj',sex: '男'},
        {id: 2, name:'gmq'},
    ]
}
render(result)
// 直接使用字面量传参,多余参数会报错
/*
* 1、 赋值变量
* 2、类型断言
* */
render( {
    data: [
        {id: 1, name:'wzj',sex: '男'},
        {id: 2, name:'gmq'},
    ]
} as Result)

// 声明一个字符串类型的数组
interface StringArray {
    [idx: number]: string
}
let chars: StringArray = ['gmq','wzj']

// 任意的字符串索引names
// 数字类型必须是字符串的子类型
interface Names {
    [x: string]: string;
    [z: number]: string;
}