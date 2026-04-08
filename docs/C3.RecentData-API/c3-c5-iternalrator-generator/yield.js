function* viewGenerator() {
  console.log("이전화");
  yield 1;
  console.log("재생/일시정지");
  yield 2;
  console.log("다음화");
}

const view = viewGenerator();

view.next(); // "이전화" 출력, yield 1에서 멈춤
view.next(); // "재생/일시정지" 출력, yield 2에서 멈춤
view.next(); // "다음화" 출력, 제너레이터 종료
