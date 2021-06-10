//Задача №1. Форматтер чисел

parseCount = (value) => { 
  let result = Number.parseInt(value)
  if (Number.isNaN(result)) {
    throw new Error("Невалидное значение") 
  }  
  return result;
};

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

// console.log(parseCount('90'));
// console.log(parseCount('zzz'));
// console.log(validateCount('80'));
// console.log(validateCount('www'));

//Задача №2. Треугольник

class Triangle {
  constructor(a, b, c) {
    if (!(a < b + c && b < a + c && c < a + b)) {
      throw new Error('Треугольник с такими сторонами не существует');

    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }  

  getArea() {
      let p = this.getPerimeter() / 2;
      return Number( Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
   }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);    
  } catch (error) {
    return {
      getPerimeter: () => 'Ошибка! Треугольник не существует',
      getArea: () => 'Ошибка! Треугольник не существует'
    }
  }
}

// tr = new Triangle(1, 100, 3);
// getTriangle(1, 100, 3);
// console.log(`Периметр = ${tr.getPerimeter()}`);
// console.log(`Периметр = ${tr.getArea()}`);


