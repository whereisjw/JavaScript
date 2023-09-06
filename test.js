const car = {
  wheels: 4,
  color: "red",
  drive: function () {
    console.log("wroom wroom");
  },
};

console.log(Object.keys(car)[0]);
console.log(typeof Object.keys(car)[0]);
console.log("car.wheels : " + car.wheels);
console.log("car.color : " + car.color);
car.drive();

/* hong,kim,park  */
const person = { name: "홍길동", age: 20 }; //person.name    홍길동

const person2 = {
  hong: { name: "홍길동", age: 20 },
  kim: { name: "김길동", age: 30 },
  park: { name: "박길동", age: 40 },
}; //person.hong.name 홍길동

const person3 = {
  plist: [
    { name: "홍길동", age: 20 },
    { name: ["김길동", "김철수"], age: 30 },
    { name: "박길동", age: 40 },
  ],
}; //person.hong.name 홍길동
