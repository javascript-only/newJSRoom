// 함수 호출
let beer = {
  drink: () => "Drink! Beer",
};

console.log(beer.drink?.()); // "Drink! Bear"
console.log(beer.sayCheers?.()); // undefined
