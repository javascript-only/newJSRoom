// 매개변수가 하나일 때 - 괄호 생략 가능
const x = 2;

const double = (x) => x * 2;
console.log(double(x)); // 4

// 매개변수가 없을 경우 - 빈 괄호 ( ) 필수
const sayRun = () => console.log("Run");
sayRun();

// 여러 매개변수 - 괄호 필수
const sum = (a, b) => a + b;
console.log(sum(15, 2));

// 객체 바로 반환 - 객체 리터럴 반환 시 소괄호로 감싸야 함
const getObj = () => ({ key: "value" });

console.log(String(getObj().key));
