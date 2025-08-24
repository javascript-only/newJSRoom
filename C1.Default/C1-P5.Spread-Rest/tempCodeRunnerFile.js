function RestAll(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0); // ...numbers는 함수에 전달된 모든 인자를 배열로 모음
}

// 배열 메서드(ex.reduce, map)와 함께 사용가능
console.log(sumAll(1, 2, 3, 4)); // 10
