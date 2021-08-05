const isFact = (n) => {
  if (n < 2) return n;
  return n * isFact(n - 1);
};

console.log(isFact(4));

//   let ans = 1;
//   for (let i = 1; i <= n; i++) {
//     ans *= i;
//   }
