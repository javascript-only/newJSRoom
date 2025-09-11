async function fetchDataError() {
  try {
    const result = await new Promise((resolve, reject) => {
      const suceess = Math.random() > 0.5; // Math.random() = 난수
      setTimeout(() => {
        if (suceess) resolve("Success");
        else reject("Failed!");
      }, 1000);
    });
    console.log(result);
  } catch (error) {
    console.error("Error: ", error);
  }
}

fetchDataError();
