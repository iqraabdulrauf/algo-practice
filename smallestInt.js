function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const sorted = [...new Set(A.sort((a, b) => a - b))];

  let smallestInt = 1;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] <= 0) continue;

    if (sorted[i] == smallestInt) {
      smallestInt++;
    }
  }
  return smallestInt;
}

console.log(solution([-2, -3, 1]));
