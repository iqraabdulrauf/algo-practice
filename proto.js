// Prtotypal inheritance

// person class
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.walk = function () {
  console.log(this.name + " is walking ");
};

// student class
function Student(name, age, rollNo) {
  Person.call(this, name, age);
  this.rollNo = rollNo;
}
Student.prototype = new Person(); // running the constructor


//until engine developers address this issue, if you are concerned about performance, you should avoid setting the [[Prototype]] of an object. Instead, create a new object with the desired [[Prototype]] using Object.create().
// Object.setPrototypeOf(Student.prototype, Person.prototype); // we can also use this but its very slow in browser



// Student.prototype = Object.create(Person.prototype); // no constructor so will not set property that consturctor do
Student.prototype.constructor = Student;
Student.prototype.study = function () {
  console.log(this.name + " is studying ");
};

var firstStudent = new Student("Iqra", 25, 220);
console.log(firstStudent);

// class inheritance

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  walk() {
    console.log(this.name + " is walking");
  }
}

class Student1 extends Person1 {
  constructor(name, age, rollNo) {
    super(name, age)
    this.rollNo = rollNo;
  }
  study() {
    console.log(this.name + " is studying");
  }
}
var firstStudent1 = new Student1("Dua", 13, 223);
console.log(firstStudent1);

const PPerson = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(PPerson);

me.name = "Matthew";

me.printIntroduction();
console.log(me);
// let Car = function (model) {
//     this.model = model;
// }

// Car.prototype.getModel = function() {
//     return this.model;
// }

// let toyota = new Car('toyota');
// console.log(toyota.getModel());
