// 1.사용자 입력 기본값 처리
function greet(name) {
  let finalName = name ?? "Guest";
  console.log(`Hello, ${finalName}!`);
}

greet("Monster"); // Hello, Monster!
greet(null); // Hello, Guest

// 2. API 데이터 처리
let user = {
  id: 1,
  nickname: "null",
};

let name = user.nickname ?? "비로그인";
console.log(name);
