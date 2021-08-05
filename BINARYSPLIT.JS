function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  let n = N.toString(2);

  const lastIndexOf1 = n.lastIndexOf("1");

//   console.log(N, n, "nnnnnnnn", lastIndexOf1);
  if (n[n.length - 1] != "1") {
    n = n.slice(0, lastIndexOf1 + 1);
    if (n.indexOf("1") == -1) return 0;
  }
  const split = n.split("1");
  console.log(split, n);
  let max = 0;
  for (let obj of split) {
    if (obj.length > max) {
      max = obj.length;
    }
  }
  return max;
}

console.log(solution(51712));
