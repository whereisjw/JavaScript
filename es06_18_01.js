/* 
Jascript:ES6(ECMA Script 6)
ECMA ?1995년에 자바스크립트를 만들어졌을때 넷스케이프에서 만들어졌지만 다른회사랑 표준규약을 맞추기위해 정의를 함 
1)Basic(문법) - let,const
        function,class,iterator,...
2)Advance(내부구현) - Scope,Hoisting,Closer,Prototype..
*Scope란 ? 
-식별자(변수,함수,클래스 등)의 유효한 범위,영역
-변수를 참조할 수 있는 유효한 범위, 영역
-스코프정의 - {} (블럭) 정의 단위로 정의됨
-블럭 : 블럭({}),함수(function a(){}),제어문(for{},if{})
-블럭 내부에서 블럭 외부의 변수를 참조가능,
-블럭 외부에서 블럭 내부의 변수는 참조 불가능

scope.js
----------
const a = 200; // 글로벌(전역) 변수 scope.js끝날때까지 유효함
{
const a = 100 //로컬(멤버)변수 블럭이 끝날때까지만 유효함
console.log(a); // 100이 출력 
}

console.log(a); // 200이 출력
scope 이 다른 경우이기 때문에 이름이 같아서 에러는 발생하지 않는다.
--> 이름 충돌방지, 식별자의 범위를 scope으로 지정,제한하며 메모리 효율성을 높일 수 있다.
블럭이 끝나면 참조하는 값이 없어지기때문에 가비지컬렉터로 간주 



**식별자(변수)는 최대한 필요한 블럭에서 정의해서 사용하도록 한다!
*/
