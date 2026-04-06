// 옵셔널 체이닝
const user = { name: "Chaeyoung", age: 20 };
// user.cat는 undefined이므로 에러 대신 undefined 반환
console.log(user.cat?.name); // undefined
// console.log(user.cat.name); // TypeError: Cannot read property 'name' of undefined
