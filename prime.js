const isPrime = () => {
  let arr = [];
  let prime = false;
  for (let i = 2; i < 100; i++) {
    prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        prime = false;
        break;
      }
    }
    prime && arr.push(i);
  }

  return arr;
};
console.log(isPrime());
