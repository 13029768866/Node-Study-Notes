// deepClone

// JSON.stringfy JSON.parse 缺陷
// 1.不能识别undefined，函数，正则，symbpl等类型
// 2.拷贝Date引用类型会变成字符串
// 3.无法拷贝不可枚举属性
// 4.无法拷贝对象原型链
// 5.无法拷贝对象循环引用

let obj = {
  name: "wzj",
};

// weakMap解决循环引用问题
function deepCLone(obj, hash = new WeakMap()) {
  if (obj == null) return obj;
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  // other type ...
  if (typeof obj !== "object") return obj;

  // object && array

  if (hash.has(obj)) return hash.get(obj);

  const copy = new obj.constructor();
  hash.set(obj, copy);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCLone(obj[key], hash);
    }
  }
  return copy;
}

console.log(deepCLone(obj));

let obj1 = {
  name: "wzj",
};
obj1.b = {};
obj1.b.a = obj1.b;
console.log(deepCLone(obj1));
