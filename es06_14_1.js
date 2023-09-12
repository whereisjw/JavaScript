// /** 심벌의 고유성 */
// const me = Symbol("Alberto");
// console.log(me);
// /* 원시데이터를 가지고있는 상수형객체 */

// /** 같은 값을 가진 새로운 심벌을 만들면 어떻게 될까? */
// const clone = Symbol("Alberto");
// console.log(clone);
// /* 첫글자가 대문자면 빌트인 class  */

// //심벌 비교
// console.log(me == clone); //false
// console.log(me === clone); //false

// const symObj = Object(me);
// console.log(symObj);

/** 객체 속성에 대한 식별자 */
const office = {
  Tom: "CEO",
  Mark: "CTO",
  Mark: "CIO",
};
for (person in office) {
  console.log(person);
}

const office2 = {
  [Symbol("Tom")]: "CEO",
  [Symbol("Mark")]: "CTO",
  [Symbol("Mark")]: "CIO",
};
for (person in office2) {
  console.log(person);
}

/** 객체 속성에 대한 식별자 얻어오기 */
const office = {
  [Symbol("Tom")]: "CEO",
  [Symbol("Mark")]: "CTO",
  [Symbol("Mark")]: "CIO",
};

//office 객체의 symbol 속성을 배열로 얻어오기
const symbolList = Object.getOwnPropertySymbols(office);
console.log(symbolList);

//속성 배열을 이용하여 속성 값 가져오기
const value = symbolList.map((symbol) => office[symbol]);
console.log(value);
