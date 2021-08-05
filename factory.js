const A = [5, 19, 8, 1];

function solution(A) {
  const sum = A.sort((a, b) => a - b).reduce((tot, ele) => (tot += ele));
  const half = sum / 2;
  let noOfFilters = 0;
  let atLeastHalf = 0;
  console.log(A);
  for (let i = A.length - 1; i >= 0; i--) {
    A[i] = A[i] / 2;

   
    atLeastHalf = A.reduce((tot, acc) => (tot += acc)) / 2;
    console.log(A,atLeastHalf,half,"AAA",A.reduce((tot, acc) => (tot += acc)))
    noOfFilters++;
    if (atLeastHalf < half) return noOfFilters;
  }
  return noOfFilters;
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (!A.length) return 0;
  const initialSum = getArraySum(A);
  let filtersCount = 0;
  while (getArraySum(A) > initialSum / 2) {
    let maxIndex = findMaxNumberIndex(A);
    if (maxIndex >= 0) {
      A[maxIndex] = A[maxIndex] / 2;
      filtersCount++;
    }
  }
  return filtersCount;
}

function getArraySum(A) {
  return A.reduce((a, b) => a + b);
}

function findMaxNumberIndex(A) {
  console.log(A.indexOf(Math.max(...A)), "iiiiiiiii");
  return A.indexOf(Math.max(...A));
}
console.log(solution(A));
