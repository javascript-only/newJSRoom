// BigInt 연산
const a = 10n;
const b = 3n;

console.log(a + b); // 13n
console.log(a - b); // 7n
console.log(a * b); // 30n
console.log(a / b); // 3n (소수점 이하는 버림)
console.log(a % b); // 1n

/* The code `const c = 5; console.log(a + c); // TypeError: Cannot mix BigInt and other types` is
attempting to perform an arithmetic operation between a BigInt value (`a`) and a regular number
(`c`). However, JavaScript does not allow mixing BigInt and other types in arithmetic operations
directly. */
// const c = 5;
// console.log(a + c); // TypeError: Cannot mix BigInt and other types
