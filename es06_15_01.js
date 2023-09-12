/** 프로토타입 상속 */
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log("Hello, my name is " + this.name);
// };

// const alberto = new Person("Alberto", 30);
// const caroline = new Person("Caroline", 30);

// alberto.greet();
// caroline.greet();

/** 클래스 생성 */
class Person {
  //프로퍼티
  //생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //info 함수 : static 함수로 생성
  static info() {
    console.log("Person 클래스의 static 메소드");
  }

  //greet 함수
  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }

  //farewell 함수
  farewell() {
    console.log("goodbye friend");
  }
}
// Person.greet(); 에러 발생
const alberto = new Person("Alberto", 30);
alberto.greet();
alberto.farewell();
Person.info();
