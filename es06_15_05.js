/** 클래스 상속 */
class Person {
  //생성자 -->new Person('홍길동',20)
  constructor(name, age) {
    //new 연산자가 호출되어 객체로 생성할때 호출되는 함수
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }
} //class Person

//Adult 클래스 : Person 자식 클래스
class Adult extends Person {
  //Adult가 Person을 포함하고 있기때문에 더 큰 메모리를 차지한다.
  constructor(name, age, work) {
    //new Adult('홍길동',30,'개발자')
    super(name, age); //Person의 생성자 호출
    this.name = name;
    this.work = work;
  }
}

const hong = new Person("홍길동", 20);
console.log(hong.name);
console.log(hong.age);

const alberto = new Adult("Alberto", 30, "developer");
console.log(alberto.age); //30
console.log(alberto.work); //developer
alberto.greet();

/* class -> new
const hong = new Person('홍길동',30)
const hong2 = new Adult('홍주니어',10)
hong */
