// 1、Symbol.toStringTag
let obj = {
  [Symbol.toStringTag]: "wzj",
};
console.log(Object.prototype.toString.call(obj));

// 2、Symbol.toPrimitive
let obj1 = {
  [Symbol.toPrimitive](type) {
    return "wzj";
  },
};
console.log(obj1 + "1");

// 3、Symbol.
let obj2 = {
  [Symbol.hasInstance](value) {
    return "wzj" in value;
  },
};
console.log({ wzj: 18 } instanceof obj2);

// 4、Symbol.for声明相当的Symbol
let s3 = Symbol.for("jw");
let s4 = Symbol.for("jw");

console.log(s3 === s4);
