//객체(오브젝트)의 타입 비교 : Object.prototype.__proto__
/* const obj1 = new Object( obj2 = new Object();
console.log(obj1.__proto__ == obj2.__proto__);
 */
/* const array1 = ["hong", "kim", "park"];  */
//Array > Object
// console.log(array1.values()); //MDN의 API 를 통해 상속구조 이해하
//오버라이딩 : 부모가 가진 메소드를 자식이 똑같이 사용

//클래스(틀) 정의=> 여러개의 객체(붕어빵)를 생성하는 틀
class Person {
  constructor(name, age, movieName) {
    this.name = name;
    this.age = age;
  }
}

class Actor extends Person {
  constructor(name, age, movieName) {
    //Actor 객체가 생성되기 전에 Person 생성되어야 하므로
    //Person의 생성자를 반드시!! 맨처음 호출해야됨
    super(name, age);
    this.movieName = movieName;
  }
}

//eat( 함수를 프로토탙입으로 정의함)

Person.prototype.eat = function () {
  console.log(`${this.name}밥을 먹어요~`);
};

//act() 함수를 프로토타입으로 정의함
Actor.prototype.act = function () {
  console.log(`${this.name}배우가 연기를 해요~`);
};

const gong = new Actor("공유", 30, "도깨비");
const son = new Person("손석구", 20);
const song = new Person("송혜교", 25);
gong.act();
// son.act();
// song.act();

/* 
8.클로저(closure)
-함수에서 사용되는 중첩 함수 정의로 생성되는 블럭 스코프를 통해 내부의 함수 스코프에서 외부의 함수 스코프에 접근 가능 하도록 허용하는 것을 의미함







*/
/* 

function outer() {
  const a = 1;
  function inner() {
    console.log(a);
  }
  inner();
}
1.데이터를 엑세스하는 메소드를 중첩된 내부에서만 사용하면 외부에서 사용 x (데이터보존성이높아짐)
2.캡슐화를통해서 대표이름 (outer)만 알아도 된다.
3.안에있는 내부부분이 감춰지기 때문에 정보 은닉의 기능을 한다. */
