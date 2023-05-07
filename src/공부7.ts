//type alias에 함수 type 저장해서 쓰는 법

//함수타입 설정은 항상 arrow function만 써야한다
// ()=>{return 10} ---> () => 10
type 함수타입 = (a: string) => number;

let 펑션: 함수타입 = function (a) {
  return 10;
};

//1. 함수타입은 ()=>{} 모양으로
//2. 함수표현식에만 type alias 사용가능

// Object 안에 함수 만들기

let 회원정보 = {
  name: "kim",
  plusOne(a: number): number {
    return a + 1;
  },
};

회원정보.plusOne();

// 콜백함수 개념설명

function 함수1(a) {
  a();
}

function 함수2() {}

//1. 함수1 내부코드 a()실행됨
//2. 파라미터 a자리에 집어넣어 함수2() 실행됨
함수1(함수2); // 함수2가 콜백함수라 불림
