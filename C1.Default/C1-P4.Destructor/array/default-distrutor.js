// 기본 값 지정 (값이 없을 때 대체)
const arr = [10];
const [a, b = 20] = arr;

console.log(a); // 10;
console.log(b); // 20;
