// // 숙제1
// // 숫자여러개를 array 자료에 저장해놨는데
// // 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// // 이걸 클리닝해주는 함수가 필요합니다.
// // 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// // [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오. = Map 함수 적용
// // 모르는 부분은 구글검색해도 봐드림

// function cleaning(x: (number | string)[]) {
//   let cleaningFinish: number[] = [];
//   x.forEach((b) => {
//     if (typeof b === "string") {
//       cleaningFinish.push(parseFloat(b));
//     } else {
//       cleaningFinish.push(b);
//     }
//   });
// }

// console.log(cleaning([1, "2", 3]));

// // 숙제2
// // 다음과 같은 함수를 만들어보십시오.

// let 철수쌤 = { subject: "math" };
// let 영희쌤 = { subject: ["science", "english"] };
// let 민수쌤 = { subject: ["science", "art", "korean"] };

// // 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.
// // 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// // 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.
// // 철수쌤같은 선생님 object 자료를 집어넣으면
// // 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// // 그리고 타입지정도 엄격하게 해보도록 합시다.

// function 확인(x: { subject: string | string[] }) {
//   if (typeof x.subject === "string") {
//     return x.subject;
//   } else if (Array.isArray(x.subject)) {
//     return x.subject[x.subject.length - 1];
//   } else {
//     return "없음";
//   }
// }
// 확인(영희쌤);

// // 숙제 1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?

// // 숙제 2. 다음 조건을 만족하는 타입을 만들어봅시다.

// // 1. 이 타입은 object 자료형이어야합니다.

// // 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.

// // 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.

// // 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.

// // type alias로 만들어보셈

// // 숙제 3. 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.

// // 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }

// // 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.

// // 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.

// // 숙제 4. 다음을 만족하는 type alias를 만들어보십시오.

// // 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.

// // 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.

// // 3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.
