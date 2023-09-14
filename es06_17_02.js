const foo = function* () {
  yield "a";
  yield "b";
  yield "c";
};
let str = "";
for (const val of foo()) {
  str = str + val;
}
//for of 사용 할 수 있는 이유
//어레이는 iterator 프로토콜를 상속받아서 그안의 next함수를 이어받아서 for of를 실행 할 수있습니다.
const foo_gen = foo();
console.log(foo_gen.next());
foo_gen.return();
console.log(foo_gen.next());
console.log(foo_gen.next());
console.log(foo_gen.next());
// 주석처리 하지 않으면 커서가 다 이동 된 상태이기 때문에 아래 while문이 실행되지 않는다.
// while (true) {
//   const data = foo_gen.next(); //{value:a, done:false}
//   if (!data.done) {
//     console.log(data.value);
//   } else {
//     break;
//   }
// }
