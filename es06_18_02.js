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

{
  const a = 100; //로컬(멤버)변수 블럭이 끝날때까지만 유효함
  console.log(a); // 100이 출력
}

console.log(a); // 정의되지 않음
