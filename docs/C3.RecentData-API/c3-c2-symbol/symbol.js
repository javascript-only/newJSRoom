const id = Symbol("id");
console.log(id); // Symbol(id)
console.log(typeof id); // symbol

// Symbol 특징
// 1. 고유성 보장 - 같은 심볼을 줘도 항상 다른 값을 가지고 있습니다.
const a = Symbol("test");
const b = Symbol("test");

console.log(a === b); // false

// 2. 문자열 변환 불가 - 자동으로 문자열이 변환 되지 않습니다.
const sym = Symbol("hello");
console.log(sym.toString()); // Symbol(hello)
