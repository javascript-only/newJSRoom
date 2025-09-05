class Background {
  constructor(name) {
    this.name = name;
  }

  info() {
    console.log(`색상: ${this.name}`);
  }
}

class Black extends Background {
  constructor(name, color) {
    super(name); // 부모 클래스 constructor 호출
    this.color = color;
  }

  info() {
    super.info(); // 부모의 info 메서드 호출
    console.log(`색상코드: ${this.color}`);
  }
}

const c = new Black("검정색", "#000");
c.info();
// 색상: 검정색
// 색상코드: #000
