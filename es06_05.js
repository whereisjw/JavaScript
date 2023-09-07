/** ES5 function syntax */
function greeting1(name) {
  return "greeting1 : hello~" + name;
}

//es5에서는 'function'키워드가 있으면 heap에 저장된다고 간주,  화살표 함수도 같은 방식으로 저장

const greeting2 = function (name) {
  return "greeting2 : hello~" + name;
};

var greeting3 = (name) => {
  return "greeting3 : hello~" + name;
};

var greeting4 = () => {
  return "greeting4 : hello~";
};
//{} 중괄호 안은 memory heap에 저장

/** 함수의 명시적 호출 */
console.log(greeting1("홍길동"));
console.log(greeting2("홍길동"));
console.log(greeting3("홍길동"));
console.log(greeting4());
