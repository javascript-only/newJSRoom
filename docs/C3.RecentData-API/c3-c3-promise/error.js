async function fetchData() {
  try {
    // 에러 처리
    const result = await Promise.reject("에러");
    console.log(result); // 에러 출력
  } catch (e) {
    console.error("Error fetching data:", e); // 에러 출력
  }
}

// 실행
fetchData();
