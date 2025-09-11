class Circle {
  static pl = 3.14159; // 정적 필드

  constructor(radius) {
    this.radius = radius; // 인스턴스 필드 선언
  }

  area() {
    return Circle.pl * this.radius ** 2; // 클래스 이름으로 접근
  }
}

console.log(Circle.pl); // ✅ 3.14159
const c = new Circle(15);
console.log(c.area()); // ✅ 706.85775
// console.log(c.pl); // ❌ undefined, 인스턴스에서는 접근 불가
