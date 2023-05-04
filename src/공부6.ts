//Literal Types
// 변수에 뭐가 들어올지 더 엄격하게 관리가능
// literal type은 const변수와 유사하게 사용가능, const변수의 업그레이드 버전

let 접니다: "대머리" | "솔로";
접니다 = "솔로";

function 함수(a: "hello"): 1 | 0 {
  return 1;
}

함수("hello");

//연습문제
//1. 가위 바위 보 중 1개 입력가능
// 가위 바위 보만 들어올 수 있는 array return

function game(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return [a];
}

game("가위");

// const 변수의 한계

const 변수 = {};
//obejct 내부의 값은 바꿀 수 있음
// 그래서 const를

let 자료 = {
  name: "kim",
} as const;
// as const
// 효과1. Object 자료를 만들때 타입을 Literal type처럼 만들어주라는 뜻 / name은 'kim'이 아니라 'kim'타입이다를 뜻하게 됨
// 효과2. Ojbect 속성들에 모두 Readonly를 붙여줌

function 내함수(a: "kim") {}
내함수(자료.name);
