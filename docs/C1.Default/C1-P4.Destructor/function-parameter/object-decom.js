// 객체를 인자로 받을 때 필요한 속성만 꺼내 사용 가능
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old`);
}

greet({ name: "Mason", age: 29 });
// Hello Mason, you are 29 years old
