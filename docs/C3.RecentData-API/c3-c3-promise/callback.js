// 2. 콜백 함수 방식
function work(callback) {
  setTimeout(() => {
    console.log("작업 완료");
    callback();
  }, 1000);

  work(() => {
    console.log("다음 작업");
  });
}

// 콜백 지옥
setTimeout(() => {
  console.log("1");

  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000);
3;
