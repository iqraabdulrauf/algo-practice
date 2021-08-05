const sum = (a) => (b) => b ? sum(a + b) : a;
console.log(sum(1)(2)(3)());

const sum2 = (a) => (b) => b ? sum(a + b) : a;

console.log(sum2(10)(20)());

const add = (a) => (b) => b ? add(a + b) : a;
console.log(add(5)(4)(2)())