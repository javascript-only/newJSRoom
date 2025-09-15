// 심볼의 내장 심볼
const myObj = {
  [Symbol.toStringTag]: "MyObject",
};

console.log(Object.prototype.toString.call(myObj)); // [object MyObject]
