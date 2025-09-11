// object Example
const nobj1 = { a: 1, b: 2 };
const nobj2 = { ...nobj1, c: 3 };
console.log(nobj2); // { a: 1, b: 2, c: 3}

// String obj
const sobj1 = { d: "Hello", e: "Java" };
const sobj2 = { ...sobj1, f: "Script" };

const combinedStr = [sobj2.d, sobj2.e].join(" ") + [sobj2.f].join("");
console.log(combinedStr); // Hello JavaScript
