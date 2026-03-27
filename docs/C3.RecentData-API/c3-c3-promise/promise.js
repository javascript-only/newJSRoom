const promise = new Promise((resolve, reject) => {
  const success = true; // 성공 여부를 나타내는 변수

  if (success) {
    resolve("작업이 성공적으로 완료되었습니다."); // 작업이 성공했을 때 resolve 호출
  } else {
    reject("작업이 실패했습니다."); // 작업이 실패했을 때 reject 호출
  }
});
