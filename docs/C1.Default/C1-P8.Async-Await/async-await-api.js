async function getUser() {
  try {
    const resolve = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await resolve.json();
    console.log(data);
  } catch (error) {
    console.error("API Load Failed", error);
  }
}

getUser();
