class Juice {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name}를 선택`);
  }
}

class Coke extends Juice {
  zero() {
    console.log(`${this.name}을 마신다`);
  }
}

const human = new Coke("제로콜라");

human.eat(); // 제로콜라를 선택
human.zero(); // 제로콜라를 마신다
