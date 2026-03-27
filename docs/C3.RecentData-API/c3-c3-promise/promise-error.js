// 실패 예시
const promise = new Promise((resolve, reject) => {
  reject("에러 발생");
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
