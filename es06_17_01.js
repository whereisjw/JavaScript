//iterator protocol, iterable protocol 포함하여 생성된 내장객체는
//순환참조가 가능하다. spread연산자, for..of 사용 할 수 있다.
//msdn api에서 prototype을 확인함

const strArray = ["바나나", "오렌지", "복숭아"];

for (str of strArray) {
  console.log(str);
}

const charArray = "hello,javascript";

for (char of charArray) {
  console.log(char);
}
// 문자열이 iterable protocol 이 적용되어 구현 할 수 있게됨

const tmap = new Map();
tmap.set(0, "test1");
tmap.set(1, "test2");
//[symbol.iterator]
const tmapArray = tmap[Symbol.iterator]();
console.log(tmap.get(1));
//test2 키값 1을가지고있는
for (const ta of tmapArray) {
  console.log(ta);
}

const tObj = {
  name: "홍길동",
  age: 20,
};

// const tArray = tObj[Symbol.iterator]();
// for (const obj of tArray) {
//   console.log(obj);
// }
