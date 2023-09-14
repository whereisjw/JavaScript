const a = 1;
{
  const b = 2;
  {
    const c = 3;
    console.log(a); //출력가능 :스코프 내부에서 외부 참조가능
  }
}
