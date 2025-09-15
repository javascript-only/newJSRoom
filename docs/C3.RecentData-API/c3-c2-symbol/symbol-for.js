const a = Symbol.for("shared");
const b = Symbol.for("shared");

console.log(a === b); // true
