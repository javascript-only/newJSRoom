class Person {
  #name; // private 필드 선언

  constructor(name) {
    this.#name = name; // 생성자에서 초기화
  }

  getName() {
    return this.#name; // 내부에서는 접근 가능
  }

  setName(newName) {
    this.#name = newName; // 외부 값 접근 허용
  }
}

const p = new Person("mary");
console.log(p.getName()); // ✅ "mary";
// console.log(p.#name); // ❌ SyntaxError: Private field '#name' must be declared in an enclosing class
