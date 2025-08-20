// 나머지를 모아 배열로 받기
const arr = [1, 2, 3, 4, 5];
const [a, b, ...rest] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]
