this.n = "iqra";

function name() {
  this.n = "dua";
  function m() {
    console.log(this.n, "outer");
    this.n = "tuba";
    console.log(this.n, "outer");
  }
  m();
  console.log("name func ", this.n);
}

name2 = () => {
  this.t = "husna";
  console.log("arrow fn", this.n);
};

// console.log(window.n);
console.log(this.n);
// console.log(n);

name();
name2();
for (var i = 0; i <= 5; i++) {
  function close(x) {
    setTimeout(() => {
      console.log(x, "var");
    }, x * 1000);
  }
  close(i);

  console.log("iqra here");
}

for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i, "let");
  }, i * 1000);
  console.log("iqra here");
}

// var a = 10;
// function b() {
//   console.log(v);
//   let v = 20;
// }
// b();
// console.log("a here ", a);
// const fn = function (x) {
//   console.log("outer this ", this);

//   return function (y) {
//     console.log("\n =========== inner this", this);

//     const that = this;
//     setTimeout(() => {
//       console.log("\n =========== settimeout this", that, arguments);
//     }, 1000);
//   };
// };

// console.log(fn(2)(3));

var obj1 = {
  value: function () {
    return this;
  },
};
var obj2 = {
  value: () => this,
};
console.log(obj1.value());
console.log(obj2.value());
