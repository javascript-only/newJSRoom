const user = { name: "Jimmy", age: 23, city: "Los Angeles", hobby: "Golf" };
const { name, ...others } = user;

console.log(name); // "Jimmy"
console.log(others); // { age: 23, city: "Los Angeles", hobby: "Golf" }
