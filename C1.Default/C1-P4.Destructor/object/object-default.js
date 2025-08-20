const user = { name: "정수" };
const { name, age = 25 } = user;

console.log(name); // "정수"
console.log(age); // 25
