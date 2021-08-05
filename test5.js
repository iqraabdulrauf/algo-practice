const str = "hello";
const reve = str.split("").reduce((rev, str) => str + rev);
console.log(reve);

const palindroem = (str) => {
  let pointer1 = 0;
  let pointer = str.length - 1;
  while (pointer1 < pointer) {
    if (str[pointer1] !== str[pointer]) return false;
    pointer1++;
    pointer--;
  }
  return true;
};
console.log(palindroem("MADAM"))