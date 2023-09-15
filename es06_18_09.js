function outer(num) {
  const a = 1;
  function inner() {
    console.log(num - 1);
  }
  inner();
}

outer(100); //결과값 : 입력값 -1
