const multiple = function (x, y) {
  return (y) => x * y;
};
const multiply = multiple(2);
const multBy3 = multiply(3);
console.log(multBy3);

//we can do this currying by binding functions

const fn = (x) => (y) => x * y;
console.log(fn(5)(4));