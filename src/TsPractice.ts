// TS 교육내용

let 회원들: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: 2 };

//모든 자료형 허용 => 타입실드 해제문법
// 최근 unknown; 이전 any;
// unknown이 any보다 안전한 이유는?

let 이름: unknown;
이름 = 123;
이름 = true;
이름 = [];

// 함수 파라미터, return값 타입지정가능
function 함수(
  x: number /* 파라미터의 타입지정 */
): number /* return 값의 타입지정*/ {
  return 2 * x;
}

// void: 함수에 return을 하지 않으려고 할 때, return하는 걸 사전에 막을 수 있음
function Void(x: number): void {
  1 + 1;
}

함수(2);
Void(2); // 타입이 지정된 파라미터는 파라미터 값을 꼭 입력해줘야함
Void(); // 타입이 지정된 파라미터 값을 입력하지 않을 경우

// 함수 파라미터가 옵션일 경우 => 파라미터변수? :타입
// 변수? :number는 변수:number|undefined와 같음
function question(x?: string | number): void {
  if (typeof x === number) {
    console.log(x + 3);
  }
}

//파라미터를 넣어도, 안넣어도 가능
question(2);
question(1);

function 내함수(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

내함수(123);

type Animal = string | number | undefined;

let 동물: Animal = 123;

type AnimalType = { name: string; age: number };
let 동물2: AnimalType = { name: "kim", age: 20 };

type Girlfriend = { name?: string };
const 여친: Girlfriend = {
  name: "엠버",
};

여친.name = "유라";

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

// &연산자로 object타입 합치기
type NewType = PositionX & PositionY; // {x:number, y:number}

// Extend한 타입 사용해보기
let position: NewType = { x: 10, y: 20 };
