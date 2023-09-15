# 호이스팅(Hoisting)

-자바스크립트 엔진(인터프리터)이 실행하기전에 변수,함수,클래스등을 최상단으로 끌어올리는 작업 <br/>
-ES6 이전에는 변수 클래스는 호이스팅 작업시 선언과 초기화가 함께 진행되었으니, ES6 부터는 선언만 가능해짐<br/>
-ES6 기준으로 let,const 키워드가 등장함<br/>
-var는 되도록 사용x,let, const를 사용하여 명확한 프로그래밍 가능<br/>

# .var 특징

-다른 언어와 코딩 방식의(변수 할당등) 차이로 디버깅이 어려움 <br/> -코드의 가독성과 유지보수 측면에서 좋지 않음<br/>

### 1)변수 선언시 키워드가 없어도 사용 가능하므로 , 선언인지 재할당인지, 구분이 어려움

```
name = '홍길동'; --> var name = '홍길동';
```

### 2) 중복선언이 가능함

```
var person = "홍길동";
var person = "홍길순";
```

### 3)변수, 클래스는 블럭 단위 스코프가 안됨

```
var fruit = "apple";
{
  var fruit = "orange";
  console.log(fruit); // orange
}
console.log(fruit); // orange
```

### 4) 함수레벨 스코프는 지원됨

```
var test = "test";
function varTest() {
  var test = "test2";
  console.log(test);
}
console.log(test); //test
```

7.프로토타입 (Prototype)

- 자바스크립트에서 객체지향 적으로 프로그래밍을 하기 위해
  프로토타입이 제공되며, 공통적인 특징,기능,상태 등을
  저장하여 필요한 객체에게 상속을 통해 적용할 수 있다. -최상위 프로토타입(클래스)은 Object로 생성되는 모든 객체는
  상속을 받아 구현된다.
  \*/

```
class Parent {
  constructor() {
    this.name = "부모";
  }
}
class Person extends Parent {
  constructor() {
    super();
    this.name = "hong";
    this.age = 20;
  }
}
hong = new Person();
```
