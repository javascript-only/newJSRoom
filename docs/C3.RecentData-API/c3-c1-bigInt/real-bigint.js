// 실무 활용

// 1. 금융 계산 예제
// BigInt를 사용하여 큰 금액을 정확하게 계산
const accountBalance = 9007199254741991n; // 2^53 - 1 (Number.MAX_SAFE_INTEGER)
const deposit = 5000000000000000n; // 큰 금액 입금

const newBalance = accountBalance + deposit; // accountBalance + 큰 금액 desposit
console.log(`새 계좌 잔액: ${newBalance}원`); // 새 계좌 잔액: 14007199254741991원

console.log("---------------------------------");

// 2. 암호화, 해시 계산 예제
// BigInt를 사용하여 큰 수의 모듈로 연산 수행
const LargePrime = 324161907n; // 큰 소수
const LargeNumber = 123456789012345678901234567890n; // 큰 수
const hasValue = LargeNumber % LargePrime; // 큰 수를 큰 소수로 나눈 나머지 계산

console.log(`해시 값: ${hasValue}`); // 해시 값: 121932631112635269

console.log("---------------------------------");

// 3. 빅 데이터 ID 처리 예제
// BigInt를 사용하여 매우 큰 ID 값을 정확하게 처리
const userId = 9007199254741991n; // 큰 사용자 ID
const newUserId = userId + 1n; // 다음 사용자 ID 생성

console.log(`이전 사용자 ID: ${userId}, 새 사용자 ID: ${newUserId}`);
