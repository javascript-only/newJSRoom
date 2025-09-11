class sport {
  // 프라이빗 메서드
  #run(a, b) {
    return a * b;
  }

  play(x) {
    return this.#run(x, x); // 내부에서만 호출
  }
}

const s = new sport();
console.log(`he is ${s.play(5)} km running`); // ✅ he is 200 km running
// console.log(p.#name(2, 3)); // ❌ SyntaxError: Private field '#name' must be declared in an enclosing class
