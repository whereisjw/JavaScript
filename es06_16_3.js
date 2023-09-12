//주어진 second(초)가 지나면 callback 함수를 호출함
//단, seconds가 0보다 작으면 에러 출력
//콘솔로그에 '타이머 종료!!'를 출력

/* function test() {
  setTimeout(() => {
    console.log("타이머 종료!!");
  }, 2000);
}
test();
 */

function excuteTimer(콜백함수, 시간) {
  if (!시간 || 시간 < 0) {
    throw new Error("seconds가 0보다 작습니다.");
  }

  setTimeout(콜백함수, 시간 * 1000);
}

try {
  excuteTimer(() => {
    console.log("타이머 종료!!");
  }, -1);
} catch (error) {
  console.log("에러발생:seconds값이 0보다 작음");
}
