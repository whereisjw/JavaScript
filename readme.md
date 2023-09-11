# spread syntax - 배열의 결합

```
const veggie = ["tomato", "cucumber", "beans"];
const meat = ["pork", "beef", "chicken"];
const menu = [...veggie, "pasta", ...meat];
//"tomato", "cucumber", "beans","pasta","pork", "beef", "chicken"
console.log(menu);

```

# 배열의 복사 - 기존 배열의 참조

```
const veggie = ["tomato", "cucumber", "beans"];
const newVeggie = veggie;

veggie.push("peas");

console.log(veggie);
console.log(newVeggie);

// [ 'tomato', 'cucumber', 'beans', 'peas' ]
// [ 'tomato', 'cucumber', 'beans', 'peas' ]
```

veggie 복사본을 생성한 것처럼 보이지만, 다음을 확인
M.H 에 같은 주소 값을 가지기 때문에 같은 결과가 나온다.

#### ES5 및 이전 버전에서의 배열 복사

```
const veggie = ["tomato", "cucumber", "beans"];
const newVeggie = [].concat(veggie); //빈 배열 생성, 기존 배열의 값을 새 배열에 잇기
veggie.push("peas");
console.log(veggie); //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie); //[ 'tomato', 'cucumber', 'beans' ]
```

#### ES6 스프레드 문법으로 배열 복사

```
const veggie2 = ["tomato", "cucumber", "beans"];
const newVeggie2 = [...veggie2]; //빈 배열 생성, 기존 배열의 값을 새 배열에 잇기
veggie2.push("peas");
console.log("---------------------------------------------->");
console.log(veggie2); //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie2); //[ 'tomato', 'cucumber', 'beans' ]
```

# 함수와 스프레드 연산자

#### 기존 방식

```
function doSuff(x, y, z) {
console.log(x + y + z);
}
var args = [0, 1, 2];
doSuff.apply(null, args); //함수 호출, 인수 전달 : //3(0+1+2)
```

#### 스프레드 문법

```
doSuff(...args); //3(0+1+2)
console.log(args);
```

#### 함수와 스프레드 연산자

```
const name = ["Alberto", "Montalesi"];
function greet(first, last) {
console.log(`Hello~ ${first} ${last}`);
}


greet(...name); //Hello~ Alberto Montalesi

//지정된 인수보다 더 많은 값을 제공하면 어떻게 될까?
const name2 = ["Jon", "Paul", "Jones"];
function greet(first, last) {
console.log(`Hello~ ${first} ${last}`);
}

greet(...name2); //Hello~ Jon Paul
```

#### 객체 리터럴과 스프레드

```
let person = {
name: "Alberto",
surname: "Montalesi",
age: 30,
};

let clone = { ...person };
console.log(clone);

//person 속성 추가
person.addr = "gangnam";

console.log(person);
console.log(clone);
```

#### /\*_ 레스트 매개변수 _/

```
const runners = ["Tom", "Paul", "Mark", "Luke"];
const [first, second, ...losers] = runners;

/* 배열로압축 rest연산자 */
console.log(...losers);
/*새로운배열로 만들어준다 spread */
```

# 변수를 키/값으로 하는 객체 만들기

```
const name = "Alberto";
const surname = "Montalesi";
const age = 20;
const nationality = "Italian";

//ES5
const person = {
  name: name,
  surname: surname,
  age: age,
  nationality: nationality,
};

//ES6
const person2 = { name, surname, age, nationality };

console.log(person);
console.log("----------------------------------------------");
console.log(person2);
```

# 객체에 함수 추가하기

```
//ES5
const person = {
  name : "hong",
  greet : function(){
      console.log("Hello~~");
  }
};

person.greet();

//ES6
const person2 = {
  name : "홍길동",
  greet(){
      console.log("Hello2~~");
  }
};

person2.greet();
```

# 객체에 함수 추가하기

#### ES5

```
const person = {
  name: "hong",
  greet: function () {
    console.log("Hello~~");
  },
};

person.greet();
```

#### ES6

```
const person2 = {
  name: "홍길동",
  greet() {
    console.log("Hello2~~");
  },
  greet2: () => {
    console.log("Hello2~~arrow function");
  },
};

person2.greet();
person2.greet2();
```

# symbol

### 심벌의 고유성

```
const me = Symbol("Alberto");
console.log(me);
```

### 원시데이터를 가지고있는 상수형객체

### 같은 값을 가진 새로운 심벌을 만들면 어떻게 될까?

첫글자가 대문자면 빌트인 class

```
const clone = Symbol("Alberto");
console.log(clone);
```

#### 심벌 비교

```
console.log(me == clone); //false
console.log(me === clone); //false
```
