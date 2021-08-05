let name111 = {
  firstName: "iqra",
  lastname: "rauf",
};

let printname = function (home, state, flat) {
  console.log(this.firstName, this.lastname, " lives in ", home, state, flat);
};
// printname.call(name, "karachi", "sindh");
// printname.apply(name, ["karachi", "sindh", "c28"]);

let name222 = {
  firstName: "Dua",
  lastname: "abdul",
};

// func borrowing
// printname.apply(name2, ["islamabad", "punjab", "c27"]);
// printname.call(name2, "islamabad", "punjab",'c27');

//bind method
Function.prototype.myBind = function (...args) {
  const fn = this;
  const otherArgs = args.slice(1);
  return (...args2) => fn.apply(args[0], [...otherArgs, ...args2]);
};
let printMyName = printname.myBind(name111, "Lahore");

let printMyName2 = printname.bind(name222);
printMyName("SINDH", "C28");

Function.prototype.bind = function (...args) {
  const fn = this;
  const others = args.slice(1);
  return (...args2) => fn.apply(args[0], [...others, ...args2]);
};
printMyName2("Rawalpindi", "Punjab", "BB");
