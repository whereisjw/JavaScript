// /** 함수와 스프레드 연산자 */
// //기존 방식
// function doSuff(x, y, z) {
//   console.log(x + y + z);
// }
// var args = [0, 1, 2];
// doSuff.apply(null, args); //함수 호출, 인수 전달 : //3(0+1+2)

// //스프레드 문법
// doSuff(...args); //3(0+1+2)
// console.log(args);

// /** 함수와 스프레드 연산자 */
// const name = ["Alberto", "Montalesi"];
// function greet(first, last) {
//   console.log(`Hello~ ${first} ${last}`);
// }

// greet(...name); //Hello~ Alberto Montalesi

// //지정된 인수보다 더 많은 값을 제공하면 어떻게 될까?
// const name2 = ["Jon", "Paul", "Jones"];
// function greet(first, last) {
//   console.log(`Hello~ ${first} ${last}`);
// }

// greet(...name2); //Hello~ Jon Paul

// /** 객체 리터럴과 스프레드 */
// let person = {
//   name: "Alberto",
//   surname: "Montalesi",
//   age: 30,
// };

// let clone = { ...person };
// console.log(clone);

// //person 속성 추가
// person.addr = "gangnam";

// console.log(person);
// console.log(clone);

/** 레스트 매개변수 */
const runners = ["Tom", "Paul", "Mark", "Luke"];
const [first, second, ...losers] = runners;
/* 배열로압축 rest연산자 */
console.log(...losers);
/*새로운배열로 만들어준다 spread */
