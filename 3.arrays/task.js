compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i]);

advancedFilter = (arr) => arr.filter((item) => item >= 0).filter((item) => (item % 3) === 0).map((item) => item * 10);

//  Это тоже работает. Оставлю на всякий случай.

// function compareArrays(arr1, arr2) {
//   return arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i]);
// }

// function advancedFilter(arr) {
//   return arr.filter((item) => item >= 0).filter((item) => (item % 3) === 0).map((item) => item * 10);
// }

//function compareArrays(arr1, arr2) {
  //let result = false;

  //if (arr1.length === arr2.length) {
  //  let compareArr = arr1.every((n, i) => n === arr2[i]);   
  //  if (compareArr === true) {
  //    result = true
  // }
  //}

  //return result; // boolean
//}
