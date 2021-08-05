// val types :

// String
// number
// symbol
// boolean
// undefined
// null

// ref type :

// Object
// function

// array

let x = 5;
let y = x; // independent of each other -- copied by value
x = 20;

console.log(x, y);

let xt = { value: 10 };
let y = x;
x.value = 30; // both x,y changed since ref type -- copied by address/reference

let obj = { v: 10 };
function increase(obj) {
  obj.v++;
}

increase(obj);
console.log(obj); // 11 because copied by refernece
