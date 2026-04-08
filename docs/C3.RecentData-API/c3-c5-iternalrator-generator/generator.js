function* randomGenerator() {
  yield Math.random();
  yield Math.random();
  return Math.random();
}

const gen = randomGenerator(); // 생성된 generator 객체

// generator 객체를 사용해서 반복하여 출력 = 출력할 때 마다 yield 키워드로 멈춰있던 부분에서 다시 시작
// done 부분은 generator 함수의 실행이 끝났는지를 나타냄
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
