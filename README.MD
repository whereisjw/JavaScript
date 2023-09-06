# 1.GitHub Repository(원격저장소) 생성 :JavaScript

#### local repository (로컬저장소) : c/dev/javascript

git 명령어

#### 1)javascript git 폴더 초기화 - $git init

#### 2) 원격 저장소와 연결(순서상관없 음) - $git remote add origin 원격저장소주소

#### 3)readme.md파일 생성

#### 4)스테이지에 올리기 - $git add [파일 혹은 폴더명]

#### 5)스테이지 상태확인 $git status

#### 6)로컬 레파지토리에 올리기$git commit -m "메세지이름"

#### 7)원격 저장소 연결 확인(상 세) - $git remote show origin

#### 8)원격 저장소에 올리기 $git push origin -u master (-u는 최초만 주고 그 다음 부터 생략가능)

#### 9)vscode open folder

---

# 2. JavaScript 정리

#### 1) Netscape --> JavaScript (1995)

#### ECMA --> 1997~

```
     ECMA Script5(ES5) ---> 2015년 이전
     ECMA Script5(ES6) ---> 2015년 이후
```

#### 2)개발 툴

#### -js dev tool: 각 브라우저가 지원하는 개발자 도구 > console

#### https://doitnow-man.tistory.com/128

<img src='https://velog.velcdn.com/images/ppohee/post/4013475f-ef6b-4a0a-b368-7c98c7a005ab/image.png' alt/>

# 변수

```
var user_name = "홍길동"; memory heap
user_name = "홍길순";   memory heap
console.log("user_name : " + user_name); call stack
```

# 데이터타입

```
var userId;
userId = 100;
console.log(typeof userId);  <!-- 넘버타입 -->
 <!-- call stack 이 비어있음 -->
userId = "hong";
console.log(typeof userId); <!-- string타입 -->
```

# 객체

```
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
```

#### callbyvalue callbyreference 개념

#### 변수는 우선 callstack에 만들어진다.

#### ex) const scar = car; 이면 car와 scar는 memory heap에서 같은 주소값을 reference한다

#### const tcar=objcet.assign({},car)는 memory heap에서 같은 구조를 가진 다른 주소 값을 reference한다

#### 출저 : http://github.com/TJG404
