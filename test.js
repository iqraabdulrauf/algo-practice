// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   const sorted = A.sort((a, b) => b - a);
//   const max = sorted[0];
//   const min = sorted[sorted.length - 1];

//   for (let i = min; i <= max; i++) {
//     if (!A.includes(i)) {
//       if (i <= 0) {
//         return 1;
//       }
//       return i;
//     }
//   }
//   return max + 1;
// }
// function solution(A, B, P) {
//   // write your code in JavaScript (Node.js 8.9.4)

//   //find in A
//   let nameNumMap = {};
//   A.map((e, i) => (nameNumMap = { ...nameNumMap, [B[i]]: [e.toLowerCase()] }));
//   const numb = B.filter((x) => x.includes(P));
//   const result = [];

//   numb.forEach((element) => {
//     result.push(...nameNumMap[element]);
//   });
//   if (!result.length) return "NO CONTACT";
//   return result.sort()[0];
// }

// let A = ["pim", "pom", "PIMOO999", "iq999ra"];
// let B = ["9999", "72648732687", "67999", "283999"];
// let P = "999";
// console.log(solution(A, B, P));
const pairOf3 = (str, factor) => {
  let triplet = "";
  let j = 0;
  for (let k = 0; k < factor; k++) {
    triplet += "-";

    for (let i = 0; i < 3; i++) {
      triplet += str[j];
      j++;
    }
  }
  //   console.log(triplet.substring(1));
  return triplet.substring(1);
};

const oddNums = () => {
  let odd = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
      odd.push(i);
    }
  }
  return odd;
};
const evenNums = () => {
  let even = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      even.push(i);
    }
  }
  return even;
};
const pairOf2 = (str, factor, pairs) => {
  let triplet = "";
  let j = 0;
  for (let k = 0; k < pairs; k++) {
    triplet += "-";

    for (let i = 0; i < 2; i++) {
      triplet += str[j];
      j++;
    }
  }
  //   console.log(triplet, "trip");
  return triplet;
};
const oddCase = (str, breakIndx, factor) => {
  let string = str.slice(0, breakIndx);
  let remaining = str.slice(breakIndx);
  //   console.log(string, breakIndx, "broken", remaining);
  const pairs = (str.length - breakIndx) / 2;
  let merge = pairOf3(string, factor);
  merge = pairOf3(string, factor) + pairOf2(remaining, factor, pairs);
  return merge;
};

const evenCase = (str, breakIndx, factor, pairs) => {
  let string = str.slice(0, breakIndx);
  let remaining = str.slice(breakIndx);
  let merge = pairOf3(string, factor);
  //   if (pairOf2(remaining, factor, pairs).length)
  //   console.log("piar", pairs);
  merge = pairOf3(string, factor) + pairOf2(remaining, factor, pairs);
  //   console.log(pairOf2(remaining, factor));
  return merge;
};
function solution(S) {
  const ignoreSpaceDash = S.replace(/-/g, "").replace(/ /g, "");
  S = ignoreSpaceDash;

  const len = S.length;
  console.log(len, "length");
  if (len % 3 == 0) {
    const factor = len / 3;
    // console.log(pairOf3(S, factor));
    return pairOf3(S, factor);
  }
  const odd = oddNums();
  if (odd.includes(len % 3)) {
    // console.log("odd");
    const factor = Math.floor(len / 3) - 1;
    const breakIndx = 3 * factor;
    // console.log(oddCase(S, breakIndx, factor));
    return oddCase(S, breakIndx, factor);
  }
  if (evenNums().includes(len % 3)) {
    // console.log("even");
    const factor = Math.floor(len / 3);
    const breakIndx = 3 * factor;
    const pairs = (len - breakIndx) / 2;
    // console.log(evenCase(S, breakIndx, factor, pairs));
    return evenCase(S, breakIndx, factor, pairs);
  }
}

let S = "00-44  48 5555 836"; //13
// let S = "00444855519234"; //14
// let S = "0 - 22 1985--324";
// let S = "0-999-222-56";

console.log(solution(S));
