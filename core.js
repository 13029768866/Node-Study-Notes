const fs = require('fs');

/* 读取文件 */
// let content = fs.readFileSync('./Node.md','utf8')
// console.log(content)

/* 判断文件是否存在 */
// let exists = fs.existsSync('./Node.md')
// console.log(exists)

/* 路径处理 */
const path = require('path');

// __dirname代表当前文件所在的目录,是一个绝对路径
console.log(path.join(__dirname,'a', 'b', 'c'))
console.log(path.resolve(__dirname)) // 根据执行的路径，解析出一个绝对路径