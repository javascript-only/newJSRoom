// 왼쪽 피 연산자가 null 또는 undefined 일 때만 작동
let user = { name: "" };
console.log(user?.name); // "" (빈 문자열 유지)

// 남용 금지
let config = { server: null };
console.log(config?.server?.url); // undefined(잘못된 설정이나 에러 ❌)
