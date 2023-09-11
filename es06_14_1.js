/** 심벌의 고유성 */
const me = Symbol("Alberto");
console.log(me);
/* 원시데이터를 가지고있는 상수형객체 */

/** 같은 값을 가진 새로운 심벌을 만들면 어떻게 될까? */
const clone = Symbol("Alberto");
console.log(clone);
/* 첫글자가 대문자면 빌트인 class  */

//심벌 비교
console.log(me == clone); //false
console.log(me === clone); //false

const symObj = Object(me);
console.log(symObj);
