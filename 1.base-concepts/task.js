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

function checkNumber(parameter, value) {
  let result = true;
  
  if (isNaN(value) || (value < 0)) {
    alert(`Параметр ${parameter} содержит неправильное значение ${value}`)
    result = false;
  }

  return result;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  'use strict'

  if ((checkNumber('процент', percent) === true) && (checkNumber('первый взнос', contribution) === true) && (checkNumber('сумма', amount) === true)) {  
    let today = new Date();
    let countMonth = (date.getFullYear() - today.getFullYear()) * 12 + (date.getMonth() - today.getMonth());
    let P = (percent / 12) / 100;
    let S = amount - contribution;
    let totalAmount = (countMonth * (S * ( P + P / ((( 1 + P ) ** countMonth) - 1 )))).toFixed(2);
  
    console.log(totalAmount);

    return Number(totalAmount);
  }  
}
