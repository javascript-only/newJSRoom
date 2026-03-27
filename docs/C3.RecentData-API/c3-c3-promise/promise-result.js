// promise 결과 출력
const promise = new Promise((resolve, reject) => {
  resolve("작업이 성공적으로 완료되었습니다.");
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
