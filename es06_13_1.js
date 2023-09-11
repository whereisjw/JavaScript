// /** 변수를 키/값으로 하는 객체 만들기 */
// const name = "Alberto";
// const surname = "Montalesi";
// const age = 20;
// const nationality = "Italian";

// //ES5
// const person = {
//   name: name,
//   surname: surname,
//   age: age,
//   nationality: nationality,
// };

// //ES6
// const person2 = { name, surname, age, nationality };

// console.log(person);
// console.log("----------------------------------------------");
// console.log(person2);

// /** 객체에 함수 추가하기 */
// //ES5
// const person = {
//   name: "hong",
//   greet: function () {
//     console.log("Hello~~");
//   },
// };

// person.greet();

// //ES6
// const person2 = {
//   name: "홍길동",
//   greet() {
//     console.log("Hello2~~");
//   },
//   greet2: () => {
//     console.log("Hello2~~arrow function");
//   },
// };

// person2.greet();
// person2.greet2();

/** 객체의 속성을 동적으로 정의하기 */
//ES5
var name = "myname";
var person = {}; //빈객체 생성
person[name] = "Alberto"; //객체 업데이트 person={myname:'Alberto'}
console.log(person.myname); //Alberto

//ES6
const name2 = "myname";
const person2 = {
  [name2]: "Alberto2",
};
console.log(person2.myname); //Alberto2
