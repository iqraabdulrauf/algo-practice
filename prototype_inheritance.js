let obj = {
  name: "iqra",
  city: "khi",
  intro: function () {
    console.log(this.name, this.city);
  },
};

let obj2 = {
  name: "dua",
};

obj2.__proto__ = obj;
console.log(obj2.intro()); // it will get this of obj2 


var Person = {
  name:"iqra",
  age:"25"
}
var anotherPerson = Object.create(Person);

//anotherPerson is prototype of Person
console.log(anotherPerson.age);