let a = [8, 1, 9, 3, 4];

const comb = (a) => {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    let str = `${a[i]}`;
    for (let j = 0; j < a.length; j++) {
      if (a[i] != a[j]) str += a[j];
    }
    arr.push(Math.floor(+str / 3));
    str = `${a[i]}`;
    for (let j = a.length - 1; j >= 0; j--) {
      if (a[i] != a[j]) str += a[j];
    }
    arr.push(Math.floor(+str / 3));
  }
  console.log(arr);
  return arr.sort((a, b) => b - a)[0];
};

console.log(comb(a));
