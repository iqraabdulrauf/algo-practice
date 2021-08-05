"use strict";
// var NaN = 123;
// var undefined = 123;

// notDeclared = "";

// silent

let obj = {
  a: 123,
  b: 0,
  get x() {
    return this.b;
  },
};

// will give error in strict mode but not without strict mode
// obj.x = 49;

Object.defineProperty(obj, "c", {
  value: 456,
  writable: false,
});

// obj.c = 789;
// console.log(c);

// Object.seal(obj); //.freeze()
// delete obj.c;

// function name(a, c, d, a) {} // error in strict mode

function name2(a, c, d) {
  var name2 = "iqra";
  var name2 = "ahemd";
  console.log(name2);
} // error in strict mode

name2();

//var can be redeclared but let cannot
//you can not re-declare the same variables in the same scope using let.
