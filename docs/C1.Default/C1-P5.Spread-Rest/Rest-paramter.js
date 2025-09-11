// 나머지 매개변수는 항상 함수 매개변수의 마지막에 위치
function RestAll(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0); // ...numbers는 함수에 전달된 모든 인자를 배열로 모음
}

// 배열 메서드(ex.reduce, map)와 함께 사용가능
console.log(RestAll(1, 2, 3, 4)); // 10
