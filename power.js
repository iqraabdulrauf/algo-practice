var isPowerOfThree = function (n) {
  if (!n) return false;
  while (n != 1) {
    if (n % 3 != 0) return false;
    n = n / 3;
  }
  return true;
};

console.log(isPowerOfThree(0));
