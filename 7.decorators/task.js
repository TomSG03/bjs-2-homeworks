//Задача 1. Усовершенствуйте кэширующий декоратор
 
function cachingDecoratorNew(func) {
  let cache = [];
  sizeCache = 5;
 
  function wrapper(...args) {
      const hash = args.join(',');
 
      let value = cache.find((item) => item.hash === hash)
      if (value != undefined) {
          console.log("Из кеша: " + value.result);
          return "Из кэша: " + value.result;
      } else {
          let result = func(...args);
          cache.push({hash, result});
          if (cache.length > sizeCache) {
            cache.shift();
          }
          console.log("Вычисляем: " + result);
          return "Вычисляем: " + result;
      }
  }
  return wrapper;
}

// Тоже работает

// function cachingDecoratorNew(func) {
//   let cache = [];
//   sizeCache = 5;
 
//   function wrapper(...args) {
//       const hash = args.join(',');
 
//       let value = cache.find((item) => Object.entries(item)[0][0] === hash)
//       if (value != undefined) {
//           console.log("Из кеша: " + value[hash]);
//           return "Из кэша: " + value[hash];
//       } else {
//           let result = func(...args);
//           cache.push({[hash]: result});
//           if (cache.length > sizeCache) {
//             cache.shift();
//           }
//           console.log("Вычисляем: " + result);
//           return "Вычисляем: " + result;
//       }
//   }
//   return wrapper;
// }

// function cachingDecoratorNew(func) {
//   let cache = [];

//   function wrapper(...args) {
//     const hash = args.join(",");
//     let idx = cache.findIndex((item) => item.hash === hash);
//     if (idx !== -1) {
//       console.log("Из кэша: " + cache[idx].value);
//       return "Из кэша: " + cache[idx].value;
//     } else {
//       let result = func(...args);
//       cache.push({hash: hash, value: result});
//       if (cache.length > 5) {
//         cache.shift();
//       } 
//       console.log("Вычисляем: " + result);
//       return "Вычисляем: " + result;
//     }
//   }
  
//   return wrapper;
// }
 
// const addThree = (a, b, c) => (a + b + c); 
// const upgradedAddThree = cachingDecoratorNew(addThree);
// upgradedAddThree(1, 2, 3); // вычисляем: 6
// upgradedAddThree(1, 2, 3); // из кэша: 6
// upgradedAddThree(2, 2, 3); // вычисляем: 7
// upgradedAddThree(3, 2, 3); // вычисляем: 8
// upgradedAddThree(4, 2, 3); // вычисляем: 9
// upgradedAddThree(5, 2, 3); // вычисляем: 10
// upgradedAddThree(6, 2, 3); // вычисляем: 11   (при этом кэш для 1, 2, 3 уничтожается)
// upgradedAddThree(1, 2, 3); // вычисляем: 6  (снова вычисляем, кэша нет)
 

//Задача 2. Фильтрация и преобразование массива

function debounceDecoratorNew(f, wait) {
  let flag = false;

  return function () {
    if (!flag) {
      f();
      flag = true;
      setTimeout(() => {
        flag = false;
        console.log('Флаг сброшен')}, wait);
    } else {
          console.log('проигнорировано');
        }  
  };
}

// const sendSignal = () => console.log('Сигнал послан'); 
// const upgradedSendSignal = debounceDecoratorNew(sendSignal,2000);
// setTimeout(upgradedSendSignal()); // Сигнал отправлен
// setTimeout(upgradedSendSignal(),300); // проигнорировано
// setTimeout(upgradedSendSignal(),900); // проигнорировано
// setTimeout(upgradedSendSignal(),1200); // проигнорировано
// setTimeout(upgradedSendSignal(),2300); // Сигнал отправлен
// setTimeout(upgradedSendSignal(),4400); // Сигнал отправлен
// setTimeout(upgradedSendSignal()); // проигнорировано
// setTimeout(upgradedSendSignal(),5000); // проигнорировано

//Задача 3. Усовершенствуйте debounceDecoratorNew

function debounceDecorator2(f, wait) {
  let flag = false;
  wrapper.count = 0;

  function wrapper() {
    if (!flag) {
      wrapper.count++;
      f();
      flag = true;
      setTimeout(() => flag = false, wait);
    } else {
          console.log('проигнорировано');
        }  
  };

  return wrapper;
}


// const sendSignal = () => console.log('Сигнал послан'); 
// const upgradedSendSignal = debounceDecorator2(sendSignal,20000);
// setTimeout(upgradedSendSignal()); // Сигнал отправлен
// setTimeout(upgradedSendSignal(),300); // проигнорировано
// setTimeout(upgradedSendSignal(),900); // проигнорировано
// setTimeout(upgradedSendSignal(),1200); // проигнорировано
// setTimeout(upgradedSendSignal(),2300); // Сигнал отправлен
// setTimeout(upgradedSendSignal(),4400); // Сигнал отправлен
// setTimeout(upgradedSendSignal(),4500); // проигнорировано
// console.log(upgradedSendSignal.count); // 3

