/** greet 함수 */
function greet(name) {
  console.log("hello~ " + name);
}

greet("홍길동\n");

/** value 증가 함수 */
var myInt = 1;
function increase(value) {
  return (value += 1);
}

console.log("myInt : " + myInt); //1
console.log("increase(myInt) : " + increase(myInt)); //2
console.log("myInt : " + myInt + "\n"); //1

/** 객체를 매개변수로 받는 함수 */
const myCar = {
  maker: "bmw",
  color: "red",
};

function changeColor(car) {
  car.color = "blue";
}

console.log(myCar);
changeColor(myCar); //color 변경
console.log(myCar);

/* 호이스팅?  */
