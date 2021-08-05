function solution(A) {
  console.log("testttttttttttttt", A);

  A = "" + A;

  // write your code in JavaScript (Node.js 8.9.4)
  let pointer1 = 0;
  let pointer2 = A.length - 1;
  let shuffled = "";

  while (pointer1 < pointer2) {
    shuffled += A[pointer1] + A[pointer2];
    pointer1++;
    pointer2--;
  }
  if (A.length % 2 != 0) {
    const midPoint = Math.floor((0 + A.length - 1) / 2);
    shuffled += A[midPoint];
  }
  return +shuffled;
}
console.log(solution(78509));
