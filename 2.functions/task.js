// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;

  sum = arr[0];
  min = arr[0];
  max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) { 
      min = arr[i]
    }
    if (max < arr[i]) { 
      max = arr[i]
    }
    sum += arr[i];
  };

  avg = (sum / arr.length).toFixed(2);

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  arr.forEach(element => {
    sum += element;  
  });

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for (let i = 1; i < arrOfArr.length; i++) {
    let n = func(arrOfArr[i]);
    if (max < n) {
      max = n
    }
  }

  return max
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
