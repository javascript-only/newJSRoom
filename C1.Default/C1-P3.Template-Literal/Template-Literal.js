const name = "Jammy";
const age = 19;

// 기존 문자열 방식
const speak1 = "Hello, My Name is" + name + "I'm " + age + "years old";

// 템플릿 리터럴 방식
const speak2 = `Hello, My Name is ${name}, I'm ${age} years old`;

console.log(speak2);
// Result: Hello, My Name is Jammy, I'm 19 years old
