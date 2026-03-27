// Promise 체이닝
new Promise((resolve) => {
  resolve(10);
})
  .then((num) => num * 2) // 10 * 2 = 20
  .then((num) => num + 5) // 20 + 5 = 25
  .then((num) => {
    console.log(num); // 25
  });
