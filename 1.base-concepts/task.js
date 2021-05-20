function solveEquation(a, b, c) {
  'use strict'

  let arr = [];
  let x;
  let D = b**2 - 4 * a * c;
  if (D === 0) {
    x = -b / (2 * a);
    arr.push(x);
  }
  else if (D > 0) {
    x = (-b + Math.sqrt(D)) / (2 * a);
    arr.push(x);
    x = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  'use strict'
  
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
