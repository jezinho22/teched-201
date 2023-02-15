// testing for logic tables

let a;
let b;

function andLogic(a, b) {
  if (a == 1 && b == 1) {
    console.log(`${a} and ${b} equates to true`);
  } else {
    console.log(`${a} and ${b} equates to false`);
  }
}

function orLogic(a, b) {
  if (a == 1 || b == 1) {
    console.log(`${a} or ${b} equates to true`);
  } else {
    console.log(`${a} or ${b} equates to false`);
  }
}
andLogic(1, 1);
andLogic(1, 0);
andLogic(0, 1);
andLogic(0, 0);
orLogic(1, 1);
orLogic(1, 0);
orLogic(0, 1);
orLogic(0, 0);
