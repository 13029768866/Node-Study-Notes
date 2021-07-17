// 数据类型Set，Map => WeakSet , WeakMap

// 1、Set 键值相等，值不重复的 Map
let set = new Set([1, 2, 4, 3, 1, 2, 3, "a"]);
set.add(5);
set.add({ a: 1 });
console.log("entries----", set.entries(set));
console.log("has----", set.has(5));

// 数组的交集，并集,差集
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

// 并集
console.log("union", [...new Set([...arr1, ...arr2])]);

// 交集
const intersection = (arr1, arr2) => {
  let s1 = new Set(arr1);
  let s2 = new Set(arr2);
  return [...s1].filter((item) => s2.has(item));
};
console.log("intersection", intersection(arr1, arr2));
// 差集
const difference = (arr1, arr2) => {
  let s1 = new Set(arr1);
  let s2 = new Set(arr2);
  return [...s1].filter((item) => !s2.has(item));
};

console.log("difference", difference(arr1, arr2));

// 2、Map
let map = new Map([
  ["a", 1],
  ["v", 1],
  ["v", 2],
]);

console.log(map);

map.set("c", 2);
console.log(map);
map.set({ a: 1 }, 2);
console.log(map);

// 类型
console.log(Object.prototype.toString.call(new Set()));
console.log(Object.prototype.toString.call(new Map()));

// 3、WeakMap 弱引用  垃圾回收GC "标记引用"
class Test {}
let my = new Test();
let map = new Map();
let weakMap = new WeakMap(); // key只能是对象

map.set(my, 1);
weakMap.set(my, 1);

my = null; // 弱引用不会影响垃圾回收
