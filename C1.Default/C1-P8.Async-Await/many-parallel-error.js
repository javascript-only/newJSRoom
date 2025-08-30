// 여러 작업 비동기 처리
async function parallelTasks() {
  const promise1 = new Promise((res) =>
    setTimeout(() => res("Work1 Completed!", 1000))
  );
  const promise2 = new Promise((res) =>
    setTimeout(() => res("Work2 Completed!", 500))
  );
  const promise3 = new Promise((res) =>
    setTimeout(() => res("Work3 Completed!", 200))
  );

  const result = await Promise.all([promise1, promise2, promise3]);
  console.log(result); // ["Work1 Completed!", "Work2 Completed", "Work3 Completed"]
}

parallelTasks();
