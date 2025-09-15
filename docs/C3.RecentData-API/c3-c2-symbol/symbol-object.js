// Symbol 오브젝트
const userId = Symbol("userId");

const user = {
  name: "John Doe",
  [userId]: "2130412", // 심볼을 키로 사용 가능
};

console.log(user.name); // John Doe
console.log(user[userId]); // 2130412
