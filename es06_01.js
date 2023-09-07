/** var - function scope variable */

for (var i = 0; i < 10; i++) {
  var leak = "I am available outside of the loop";
}
console.log(i);
console.log(leak);

function myfunction() {
  var fscope = "I am available inside this function";
  console.log(fscope);
}
console.log(fscope); //에러 발생, 함수 스코프 영역을 벗어남
