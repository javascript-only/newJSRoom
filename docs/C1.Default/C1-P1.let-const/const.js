const nickname = "paul smith";
// nickname = "Harry Potter"; // ❌ 재할당 불가

const user = { hobby: "reading" };
user.hobby = "gaming"; // ✅ 객체 속성은 변경 가능
console.log(` ${nickname} is hobby: ${user.hobby}`); //  paul smith is hobby: gaming
