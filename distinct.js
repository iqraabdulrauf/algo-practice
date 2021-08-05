const A = [1, 2, 4, 1, 5, 6, 2, 6, 6, 1];

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const map = {};
  for (let ele of A) {
    if (map[ele]) map[ele]++;
    else map[ele] = 1;
  }
  let arr = [];
  for (let i in map) {
    if (map[i] == 1) arr.push(i);
  }
  console.log(map);

  return Object.keys(map);
}

console.log(solution(A));
