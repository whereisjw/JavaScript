// "use strict";

const i = 100;
for (let i = 0; i < 5; i++) {
  console.log(i); //i-->
}
console.log(i);

let person = "홍길동";
// person = "홍길순";
console.log(person);

var fruit = "apple";

{
  var fruit = "orange";
  console.log(fruit); // orange
}

console.log(fruit); // orange

var test = "test";
function varTest() {
  var test = "test2";
  console.log(test);
}
console.log(test); //test

class Person {
  constructor() {
    this.name = "hong";
    this.age = 20;
  }
}

let hong = new Person();
/* new 라고 적혀있으면 m.h에 만들어진다고 생각해야함 */
