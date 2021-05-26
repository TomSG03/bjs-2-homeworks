function compareArrays(arr1, arr2) {
  //let result = false;

  //if (arr1.length === arr2.length) {
  //  let compareArr = arr1.every((n, i) => n === arr2[i]);   //  Это тоже работаетю. Оставлю на всякий случай.
  //  if (compareArr === true) {
  //    result = true
  // }
  //}

  //return result; // boolean

  return arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
}

function advancedFilter(arr) {
  return arr.filter((item) => item >= 0).filter((item) => (item % 3) === 0).map((item) => item * 10);
}
