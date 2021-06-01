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
  
  for (let index = 0; index < mark.length; index++) {
    this.marks.push(mark[index]);;
    
  }
}  

Student.prototype.getAverage = function ()  {
  if(this.marks === undefined) {
    alert('Нет массива оценок!');
  }
  else {
    let summa = 0;
    for (let index = 0; index < this.marks.length; index++) {
      summa += this.marks[index];
    }
    return Number(summa / this.marks.length).toFixed(2);
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
  




