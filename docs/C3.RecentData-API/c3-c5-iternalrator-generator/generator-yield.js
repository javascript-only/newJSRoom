function* viewGenerator() {
  yield "이전화";
  yield "재생/일시정지";
  yield "다음화";
}

for (let view of viewGenerator()) {
  console.log(view); // "이전화", "재생/일시정지", "다음화" 순서대로 출력
}
