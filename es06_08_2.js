/** 객체 디스트럭처링 - ES6 이전 */
var person = {
  first: "hong",
  last: "gildong",
};

var first = person.first;
var last = person.last;

console.log(`first : ${first}`);
console.log(`last : ${last}`);

/** 객체 디스트럭처링 - ES6 */
var person2 = {
  first2: "hong",
  last2: "gildong",
};

const { first2, last2 } = person2;

console.log(`first : ${first2}`);
console.log(`last : ${last2}`);
