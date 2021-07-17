let s1 = Symbol("nb");
let obj = {
  name: "wzj",
  age: 18,
  [s1]: "yes",
};

Reflect.ownKeys(obj).forEach((item) => console.log(item));

// 常用method： get , set , delete , preventExtensions阻止对象拓展. ownKeys， apply

const fn = (a, b) => console.log("fn", a, b);

fn.apply = function () {
  console.log("apply");
};

fn.apply();

Function.prototype.apply.call(fn, null, [1, 2]);

Reflect.apply(fn, null, [1, 2]);
