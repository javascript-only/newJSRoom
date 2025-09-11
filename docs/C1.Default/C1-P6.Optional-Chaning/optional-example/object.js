// 객체 속성  접근
let user = {
  name: "Mark",
  profile: {
    age: 20,
  },
};

console.log(user?.profile?.age); // 20
console.log(user?.profile?.address); // undefined
console.log(user?.job?.title); // undefined
