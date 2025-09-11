console.log(a); // ❌ a는 호이스팅으로 인해 선언 전에 접근 가능하지만, 초기화는 아직 안 됨
var a = 10; // ✅ a는 undefined로 초기화됨

console.log(b); // ❌ b는 호이스팅으로 인해 선언 전에 접근 가능하지만, 초기화는 아직 안 됨
let b = 2; // ✅ b는 호이스팅되지만, 초기화 전에 접근하면 ReferenceError 발생
