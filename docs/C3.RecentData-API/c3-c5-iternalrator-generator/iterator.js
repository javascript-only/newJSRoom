const arr = [1, 2, 3, 4];
// 배열의 iterator 객체를 생성
const iter = arr[Symbol.iterator]();

// iterator 객체를 사용해서 배열의 각 원소를 반복하여 출력
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 4, done: false }
console.log(iter.next()); // { value: undefined, done: true }
