let score = 0;

let total1 = score || 100; // or 연산자
let total2 = score ?? 100; // Null 병합 연산자

console.log(total1); // 100
console.log(total2); // 0
