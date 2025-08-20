// 값을 건너뛰고 필요한 것만 받기
const arr = [1, 2, 3, 4];
const [first, , third] = arr;

console.log(first); // 1
console.log(third); // 3
