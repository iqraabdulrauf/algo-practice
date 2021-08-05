let str = "madam";
const palindrome = (str) => {
  let pointer1 = 0;
  let pointer2 = str.length - 1;
  while (pointer1 < pointer2) {
    if (str[pointer1] != str[pointer2]) return false;
    pointer1++;
    pointer2--;
  }
  return true;
};
palindrome(str);

// console.log(str.split('').reverse().join('') == str)
