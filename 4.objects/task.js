function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function addMark(mark)  {
  if(this.marks === undefined) {
    this.marks = [];
  }
  
  this.marks.push(this.marks);

}

Student.prototype.addMark = function addMarks(...mark)  {
  if(this.marks === undefined) {
    this.marks = [];
  }
  
  for (const key in mark) {
    this.marks.push(mark[key]);
    
  }


  // for (let index = 0; index < mark.length; index++) {
  //   this.marks.push(mark[index]);;
  // }
}  

Student.prototype.getAverage = function ()  {
  if(this.marks === undefined) {
    alert('Нет массива оценок!');
  }
  else {
    let summa = 0;

    //Обход массива объекта М4
    // summa = this.marks.reduce(function (summa, current) {return summa + current}, 0); 
    // Через стрелочную функцию
    summa = this.marks.reduce((summa, current) => summa + current, 0); 

    //Обход массива объекта М3
    // this.marks.forEach(element => summa += element);
   
    //Обход массива объекта М2
    // for (let index in this.marks) {
    //     summa += this.marks[index];
    //    }
    //    return Number(summa / this.marks.length).toFixed(2);

    //Обход массива объекта М1
    // for (let index = 0; index < this.marks.length; index++) {
    //   summa += this.marks[index];
    // }
    return summa / this.marks.length;
  }
}

// Эта функция для прохождения теста
Student.prototype.excludeStudent = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

// Эта функция для по условию задания
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
  
let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage()); //4.6666
console.log(student1);
// {age: 37, gender: "male", marks: [5, 4, 5], name: "Tony", subject: "Algebra"}
let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')
console.log(student2)
// {name: "Buzz", gender: "female", age: 35, excluded: "low grades"}



