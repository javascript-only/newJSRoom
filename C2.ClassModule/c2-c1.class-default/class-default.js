class Person {
  // 생성자 (객체 생성 시 자동 실행)
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 메서드 (Prototype에 저장)
  sayHell() {
    console.log(`Hello, my name is ${this.name}, ${this.age} years old`);
  }
}

// 객체 생성
const p1 = new Person("James", 25);
p1.sayHell(); // Hello, my name is James, 25 years old
