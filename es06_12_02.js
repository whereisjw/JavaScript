// /** spread syntax - 배열의 결합 */

// const veggie = ["tomato", "cucumber", "beans"];
// const meat = ["pork", "beef", "chicken"];
// const menu = [...veggie, "pasta", ...meat];
// //"tomato", "cucumber", "beans","pasta","pork", "beef", "chicken"
// console.log(menu);

// /** 배열의 복사 - 기존 배열의 참조 */

// const veggie = ["tomato", "cucumber", "beans"];
// const newVeggie = veggie;

// //veggie 복사본을 생성한 것처럼 보이지만, 다음을 확인
// veggie.push("peas");

// console.log(veggie);
// console.log(newVeggie);
// // M.H 에 같은 주소 값을 가지기 때문에 같은 결과가 나온다.
// // [ 'tomato', 'cucumber', 'beans', 'peas' ]
// // [ 'tomato', 'cucumber', 'beans', 'peas' ]

/** ES5 및 이전 버전에서의 배열 복사 */
const veggie = ["tomato", "cucumber", "beans"];
const newVeggie = [].concat(veggie); //빈 배열 생성, 기존 배열의 값을 새 배열에 잇기
veggie.push("peas");
console.log(veggie); //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie); //[ 'tomato', 'cucumber', 'beans' ]

/** ES6 스프레드 문법으로 배열 복사 */
const veggie2 = ["tomato", "cucumber", "beans"];
const newVeggie2 = [...veggie2]; //빈 배열 생성, 기존 배열의 값을 새 배열에 잇기
veggie2.push("peas");
console.log("---------------------------------------------->");
console.log(veggie2); //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie2); //[ 'tomato', 'cucumber', 'beans' ]

/* node es06_12_02.js */
