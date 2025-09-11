let User = {
  Profile: {
    name: "주현",
  },
};

let city = User.Profile?.city ?? "정보 없음";
console.log(city); // 정보 없음
