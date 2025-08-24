function sum(x, y, z) {
  return x + y + z;
}

const total = [1, 2, 3];
console.log(sum(...total)); // 6

function inter(_, m, j) {
  return m / j;
}

const fountain = [4, 20, 5];
console.log(inter(...fountain)); // 4 = 20 / 5
