function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  //   const map = {};
  //   const sorted = A.sort((a, b) => a - b);

  //   if (A.length == 1) return 1;
  //   for (let i = 0; i < sorted.length - 1; i++) {
  //     console.log("fisrt");
  //     if (sorted[i] + 1 != sorted[i + 1]) return 0;
  //   }
  //   for (let i = 0; i < A.length; i++) {
  //     console.log("sec");
  //     if (map[A[i]]) return 0;
  //     else map[A[i]] = 1;
  //   }
  //   return 1;

  // missing perm number

  let length = A.length + 1;
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (A[i] != i + 1) return i + 1;
  }
  return length;
}

console.log(solution([1, 2, 3, 5]));

//permcheck
// A.sort((a, b) => a - b);
// for (let i = 0; i < A.length; i++) {
//     if (A[i] != i + 1) return 0; //isn't a number for this position
// }
return 1;
