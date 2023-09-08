/** 배열 디스트럭처링 */
const person = ["hong", "gildong", 30];
const [name, sname, age] = person;

console.log("--------------> person");
console.log(name, sname, age);
console.log(`name : ${name}, sname : ${sname}, age : ${age}`);

/** person2 */
const person2 = ["hong", "gildong", 30];
const [name2, sname2] = person2;

console.log("--------------> person2");
//console.log(name2, sname2, age2); //age2는 변수로 할당되지 않아, ReferenceError 발생
console.log(`name : ${name2}, sname : ${sname2}`);

/** person3 & rest operator(레스트 연산자) */
const fruits = ["사과", "복숭아", "수박", "자두", "멜론"];
const [f1, f2, ...food] = fruits;
