const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; // arr1 요소를 펼처 arr2에 추가
console.log(arr2); // [1, 2, 3, 4, 5, 6]

const str1 = ["Hello"];
const str2 = [...str1, " ", "World"].join(""); // join을 사용해 arr1 arr2 문자 합치기
console.log(str2); // Hello World
