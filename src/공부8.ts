type Name = string | number;
type Age = string;

let 사람: Name & Age = 1;

//object
type Animal = {
  name: number;
  age: number;
  period: number;
};

type Trainer = {
  name: string | number;
  age: number;
  id: number;
};

let train: Animal & Trainer = {
  name: 1,
  age: 1,
  period: 1,
  id: 1,
};
