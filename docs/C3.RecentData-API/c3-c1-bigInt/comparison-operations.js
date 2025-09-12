// BigInt 비교 연산
const big = 100000000000000000000n; // Number.MAX_SAFE_INTEGER 보다 큰 BigInt
const min = 1e20; // 10의 20제곱 (100000000000000000000)

console.log(big === min); // false (타입이 다름)
console.log(big == min); // true (타입 변환 후 비교);
