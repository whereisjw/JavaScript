function a() {
  // memory heap에 보관
  return 1;
}

function b() {
  // memory heap에 보관
  return a() + 1;
}

function c() {
  // memory heap에 보관
  return b() + 1;
}

const result = c(); // 함수 c를 호출
console.log(result);

/* 쓰레드가 쌓인 걸 순차적으로 처리 동기식 처리 */
