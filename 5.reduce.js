// 数组不能为空
[1, 2, 3, 4, 5, 6].reduce(function (prev, current, index, array) {
  console.log(prev, current);
  return prev + current;
});

Array.prototype.myReduce = function (cb, prev) {
  for (let i = 0; i < this.length; i++) {
    if (!prev) {
      prev = cb(this[i], this[i + 1], i + 1, this);
      i++;
    } else {
      prev = cb(prev, this[i], i, this);
    }
  }
  return prev;
};

let r = [1, 2, 3, 4, 5, 6].myReduce(function (prev, current, index, array) {
  console.log(prev, current);
  return prev + current;
});

console.log(r);

// compose 实现compose 组合函数
function sum(a, b) {
  return a + b;
}

function len(str) {
  return str.length;
}

function addPrefix(str) {
  return "$" + str;
}

let res = addPrefix(len(sum("a", "b")));
console.log(res);

const compose = (...fns) => {
  return function (...args) {
    let lastFn = fns.pop();
    let res = lastFn(...args);
    return fns.reduceRight((prev, current) => {
      return current(prev);
    }, res);
  };
};

let final = compose(addPrefix, len, sum);
console.log(final("a", "b"));
