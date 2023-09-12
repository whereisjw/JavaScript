function excuteTimer(시간) {
  return new Promise((resolve, reject) => {
    if (!시간 || 시간 < 0) {
      reject(new Error("seconds가 0보다 작습니다."));
    }
    setTimeout(() => resolve(), 시간 * 1000);
  });
}

excuteTimer(2)
  .then(() => {
    console.log("타이머 종료!!");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("프로그램종료!!");
  });
