// BigInt 정수만 지원, 소수점 불가
// Json 문자열로 변환 시 BigInt는 지원하지 않음
// 문자열로 변환 후 사용 가능
const big = 1234567890123456789012345678901234567890n;
const jsonString = JSON.stringify(big.toString());

console.log(jsonString); // "1234567890123456789012345678901234567890"
