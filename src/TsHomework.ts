//다음 변수 4개에 타입을 지정해보기
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

//학교라는 변수에 타입지정해보기
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

//1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주자.
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다"를 출력하는 함수
// 파라미터와 return 타입 지정도 잘 해주자
function hi(x?: string): string {
  if (typeof x === string) {
    return "안녕하세요" + x;
  } else {
    ("이름이 없습니다.");
  }
}

//2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보자
// 예를들어 '245'이런 문자를 입력하면 3이 return되어야 한다
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return되어야 한다
// 숫자 또는 문자 이외의 자료가 들어오면 안된다.
function count(x: string | number): string | number {
  if (typeof x === string) {
    return x.toString().length;
  } else if (typeof x === number) {
    return x.length;
  }
}

//3. 결혼 가능 확률을 알려주는 함수를 만들어보자
// 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수('상', '중', '하')를 입력할 수 있어야 한다.
// 월소득은 만원 당 1점, 집 보유시 500점 & 미보유시 0점, 매력점수는 '상'일때만 100점으로 계산
// 총 점수가 600점 이상일 경우 "결혼가능"을 return해준다. 그 외엔 아무것도 return하지 않는다.
// 예시1. 결혼가능하냐(700, false, '중') => return "결혼가능"
// 예시2. 결혼가능하냐(100, false, '상') => 아무것도 return되지 않음
