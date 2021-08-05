const num = 4;

const by10 = (num) => {
  return Math.floor(num / 10);
};
const remBy10 = (num) => {
  return Math.floor(num % 10);
};

const reverseNum = (num, str = "") => {
  if (num.toString().length == 1) return (str += num);
  return reverseNum(by10(num), (str += remBy10(num)));
};

console.log(reverseNum(num, ""));
