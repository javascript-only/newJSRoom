class MathUtil {
  static randomInt(min, max) {
    // 정적 메서드
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

console.log(MathUtil.randomInt(1, 20)); // ✅ 1~20 사이의 랜덤 정수
