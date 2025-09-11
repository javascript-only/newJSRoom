// async/await  함수는 항상 Promise를 반환
async function fetchData() {
  // await는 Promise가 처리될 따까지 대기
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data Load!"), 3000); // 3초후 로드
  });
  console.log(result);
}

fetchData();
