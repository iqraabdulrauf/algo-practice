// function solution(N) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   N = Number(N).toString(2);
//   const indices = [];
//   const diff = [];
//   for (let i = 0; i < N.length; i++) {
//     if (N[i] == 1) indices.push(i);
//   }

//   if (indices.length < 2) return 0;
//   indices.forEach((x, index) => {
//     const zeros = indices[index + 1] - x - 1;
//     diff.push(zeros);
//   });
//   return diff.sort((a, b) => b - a)[0];
// }

// let N = 74901729;
// console.log(solution(N));

// let A = [9, 3, 9, 3, 7, 7, 5];

// function solution(A) {
//   let pairs = [];
//   for (let i = 0; i < A.length; i++) {
//     let ele = A[i];

//     let pairFound = false;
//     for (let j = i + 1; j < A.length; j++) {
//       pairFound = false;
//       if (ele == A[j] && !pairs.includes(i)) {
//         pairs.push(j);
//         pairFound = true;
//         break;
//       }
//     }
//     if (pairFound && !pairs.includes(i)) {
//       pairs.push(i);
//     }
//   }
//   for (let k = 0; k < A.length; k++) {
//     if (!pairs.includes(k)) return A[k];
//   }
//   return -1;
// }
// console.log(solution(A));

// let arr = [1, 5, 2, 4, 9, 10];
// //even num
// const even = arr.filter((x) => x % 2 == 0);
// //odd
// const odd = arr.filter((x) => x % 2 != 0);

// console.log(even, odd);

// let strings = ["ab", "ab", "abc", "bc"];
// let query = ["ab", "abc", "bc", "aa"];

// let map = [];
// const arrayintsance = (strings, query) => {
//   query.forEach((ele) => map.push(strings.filter((x) => x == ele).length));
//   return map;
// };

// console.log(arrayintsance(strings, query));

// var searchRange = function (nums, target) {
//   const min = nums.indexOf(target);
//   const max = nums.lastIndexOf(target);
//   return [min, max];
// };

// let nums = [5, 7, 7, 8, 8, 10];
// let target = 6;
// console.log(searchRange(nums, target));

// let pal = "madam";

// const isPal = (pal) => {
//   let ptr1 = 0;
//   let ptr2 = pal.length - 1;
//   while (ptr1 < ptr2) {
//     if (pal[ptr1] != pal[ptr2]) return false;
//     ptr1++;
//     ptr2--;
//   }
//   return true;
// };

// // console.log(isPal(pal));

// let s = "cbbd";
// const longestpal = (s) => {
//   let palArr = [];
//   for (let i = 0; i < s.length; i++) {
//     let p = s[i];
//     for (let j = i + 1; j < s.length; j++) {
//       p += s[j];
//       isPal(p) && palArr.push(p);
//     }
//   }
//   if (!palArr.length) return s[0];

//   let LONGEST = "";
//   for (let k = 0; k < palArr.length; k++) {
//     const length = palArr[k].length;
//     if (length > LONGEST.length) {
//       LONGEST = palArr[k];
//     }
//   }
//   return LONGEST;
// };

// console.log(longestpal(s));

// includes implementation fro string
let str = ["abcd", "efg"];
let pattern = "efg";

let isArray = false;
// if(str instanceof Array){
//           isArray = true
// }
const pmatch = (a, pattern) => {
  let found = false;
  for (let i = 0; i < a.length; i++) {
    let newindex = i;
    found = false;
    for (let j = 0; j < pattern.length; j++) {
      found = false;

      if (a[newindex] == pattern[j]) {
        newindex = newindex + 1;
        found = true;
      } else {
        found = false;
        break;
      }
    }
    if (found) return true;
  }
  return false;
};

console.log(pmatch(str, pattern));

// const r = [9,4,3];
// console.log(Math.max(...r));
// console.log(Math.max.apply(null, r));
