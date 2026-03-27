// async/await 더 쉽게 쓰기

// 1. async 함수 정의
async function test() {
  return "Hello, Async/Await!";
}

// 출력
test().then(console.log); // Hello, Async/Await!

// 2. await 사용
function delay(ms) {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Delayed Result"), ms),
  );
}

async function run() {
  const result = await delay(1000);
  console.log(result); // Delayed Result (1초 후 출력)
}

run(); // run() 호출하여 async 함수 실행
