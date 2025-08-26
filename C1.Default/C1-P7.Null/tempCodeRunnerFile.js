// 1.사용자 입력 기본값 처리
function greet(name) {
  let finalName = name ?? "Guest";
  console.log(`Hello, ${finalName}!`);
}

greet("Monster"); // Hello, Monster!
greet(null); // Hello, Guest
