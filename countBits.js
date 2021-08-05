// const getAllIndices = (str, value) => {
//   const indices = [];
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === value) indices.push(i);
//   }
//   return indices;
// };

var countBits = function (n) {
  const arr = new Array(n);
  for (let i = 0; i <= n; i++) {
    arr[i] = i.toString(2).replace(/0/g, "").length;
  }
  return arr;
};

const n = 5;

console.log(countBits(n));

