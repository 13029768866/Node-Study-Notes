interface  List {
    id: number,
    name: string,
    age?: number
    // [x: string]: any
}
interface Result {
    data: List[]
}
// 渲染函数
function render(result: Result) {
    result.data.forEach(item => {
        console.log(item.id, item.name)
        if(item.age){
            console.log(item.age)
        }
    })
}

//模拟后端接口
let result = {
    data: [
        {id: 1, name: "wzj"},
        {id: 2, name: "wzjWife"},
    ]
}

render(result)

// 索引是数字，值是字符串（字符串类型的数组）
interface StringArray{
    [index: number]: string | number;
}
let arr: StringArray = ['A', 'B']

interface Names {
    [x: string ]: string;
    [z: number ]: string;
}