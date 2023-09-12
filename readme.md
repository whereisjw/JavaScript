# 프로미스

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F999DB3485C3214E122' alt/>
https://new93helloworld.tistory.com/358

#### 위 그림은 callstack이 하나이기 때문에 싱글쓰레드라고 한다

callstack을 거치지 않고 webAPI에서 시간이 지난 후task queue(callback queue 또는 event queue)을 거쳐 처리를 하는 방식을 비동기식이라고 한다.

### callstack

```
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
```

쓰레드가 쌓인 걸 순차적으로 처리 동기식 처리

### callback

```
function execute(callback, seconds) {
  console.log("1");
  setTimeout(callback, seconds);
  console.log("3");
}

execute(() => {
  console.log("2");
}, 2000);
```

결과는 1 3이 바로 출력되고 2초 후 2가 출력된다.
2는 webapi에서 이벤트큐,이벤트루프를 거쳐서 콜스택으로 오게된다.

### callback 테스트

```
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
```

# Promise

#### 비동기식으로 처리되는 코드를 대신 실행시켜줌

# async의 이점

```
function getHtml() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("HTML");
    }, 1000);
  });
}
function getCSS() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("CSS");
    }, 1000);
  });
}
function getJS() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("JS");
    }, 1000);
  });
}
```

위 함수들을 출력할때

```
getHtml().then((html) => {
  getCSS().then((css) => {
    getJS().then((js) => {
      console.log([html, css, js]);
    });
  });
});
```

위와 같이 then을 써서 출력이 가능하다.

```
async function getResult() {
  const html = await getHtml();
  const css = await getCSS();
  const js = await getJS();

  return [html, css, js];
}

getResult().then((result) => {
  console.log(result);
});
```

### git 연습

브랜치만드는법 (master 이후)
마스터에서
$git checkout -b develop
$git push --set-upstream origin develop (위에뜨는거 복붙하면됨)

---마스터브랜치 잠그기
Lock branch
pull request(코드업로드동의후에 업로드가능한옵션)

---팀원
깃허브 페이지에서 내이름으로 된 페이지만들기
복사 후 git clone한 파일에서
git fetch origin
git checkout 브랜치명

작업완료후 )acp

올라가면 pull request 만들기

충돌날경우)
커맨드라인을 활용
(git checkout -
적으면 직전브랜치로이동)
