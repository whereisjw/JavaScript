/** 중첩 템플릿 */
/* 배열은 동일한 데이터타입을 물리적으로 연속된 저장소에 저장한다. */
const people = [
  { name: "홍길동", age: 27 },
  { name: "홍홍", age: 27 },
  { name: "홍길순", age: 31 },
];

const markup = `
<ul>
    ${people.map((person) => `<li> ${person.name} </li>`)}
</ul>
`;
console.log(markup);
