// Null 병합 연산자
const count = 0;
const text = null;

console.log(count ?? 20); // 출력: 0 (0은 null이 아니므로 20이 아닌 0이 출력);
console.log(text ?? "기본 텍스트"); // 출력: "기본 텍스트" (text는 null이므로 오른쪽 값이 출력);
