const obj = {
  value: 20,
  normalFunc: function () {
    console.log(this.value); // 20
  },
  arrowFunc: () => {
    console.log(this.value);
  },
};

obj.normalFunc(); // 20
obj.arrowFunc(); // undefined
