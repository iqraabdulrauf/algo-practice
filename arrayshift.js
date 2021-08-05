function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  console.log(A);

  if (A.length) {
    for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
    }
  }

  return A;
}
console.log(solution([1,2,3,4], 2));
