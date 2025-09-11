async function sequentialTasks() {
  const task1 = await new Promise((res) =>
    setTimeout(() => res("Work1 Completed!"), 1000)
  );
  console.log(task1);

  const task2 = await new Promise((res) =>
    setTimeout(() => res("Work2 Completed!"), 1000)
  );
  console.log(task2);

  const task3 = await new Promise((res) =>
    setTimeout(() => res("Work3 Completed!"), 1000)
  );
  console.log(task3);
}

sequentialTasks();
