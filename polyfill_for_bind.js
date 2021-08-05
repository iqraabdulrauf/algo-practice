let name111 = {
  firstName: "iqra",
  lastname: "rauf",
};
let printname = function (home, state, flat) {
  console.log(this.firstName, this.lastname, " lives in ", home, state, flat);
};
//bind method

// using function.prototype because it will be added in every functions prototype
Function.prototype.myBind = function (...args) {
  const fn = this;
  const otherArgs = args.slice(1);
  return (...args2) => fn.apply(args[0], [...otherArgs, ...args2]);
};
let printMyName = printname.myBind(name111, "Lahore");
console.log(printMyName());

Function.prototype.bind = function (...args) {
  const fn = this;
  const others = args.slice(1);
  return (...args2) => fn.apply(args[0], [...others, ...args2]);
};
