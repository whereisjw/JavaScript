/** TDZ(Temporal Dead Zone) */

name;
console.log(i); //선언과 초기화됨 (es5문법)
var i = "I am a var";

console.log(j); //초기화 x var선언이면 undefine
let j = "I am a let"; //ReferenceError: Cannot access 'j' before initialization

/* es6문법에서는 var 비선호 let 과 const를 사용할것 */
