// 배열
let users = [{ name: "Jimmy" }, { name: "Bob" }, null];

console.log(users[0]?.name); // "Jimmy"
console.log(users[2]?.name); // "undefined (null안전 처리)"
console.log(users[5]?.name); // undefined
