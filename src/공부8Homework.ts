type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};

type DashType = (x: string) => number;

function removeDash(x: string): number {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}

type NewFunc = (x: string, y: CutType, z: DashType) => {};

let newFunc: NewFunc = function (x, y, z) {
  return z(y(x));
};

newFunc("010-1111-2222", cutZero, removeDash);
