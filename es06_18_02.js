// const a = 200; // 글로벌(전역) 변수 scope.js끝날때까지 유효함
// {
//   const a = 100; //로컬(멤버)변수 블럭이 끝날때까지만 유효함
//   console.log(a); // 100이 출력
// }

// console.log(a); // 200이 출력

// const a = 200; // 글로벌(전역) 변수 scope.js끝날때까지 유효함
// {
//   console.log(a); // 200이 출력
// }

// console.log(a); // 200이 출력

// {
//   const a = 100; //로컬(멤버)변수 블럭이 끝날때까지만 유효함
//   console.log(a); // 100이 출력
// }

// console.log(a); // 정의되지 않음

// function print() {
//   const message = "Hello~ JavasScript";
//   console.log(message); // "Hello~ JavasScript" 출력
// }
// print();
// /* console.log(message); */ // 에러발생

// const a = 100;
// const b = 300;
// function sum(a, b) {
//   console.log(a + b); //3출력
// }
// sum(1, 2);
// console.log(a + b); // 400 출력

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i); // 레퍼런스 에러
