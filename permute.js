// var permute = function (nums) {
//   let arr = [];

//   if (nums.length == 1) return (arr = [nums[0]]);
//   for (let i = 0; i < nums.length; i++) {
//     let innerArr = [nums[i]];

//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] !== nums[j]) {
//         innerArr.push(nums[j]);
//       }
//     }

//     arr.push(innerArr);
//     innerArr = [nums[i]];
//     for (let j = nums.length - 1; j >= 0; j--) {
//       if (nums[i] !== nums[j]) {
//         innerArr.push(nums[j]);
//       }
//     }
//     arr.push(innerArr);
//   }

//   let uniqueArray = arr.reduce((r, v) => ((r[v] = v), r), {});
//   return Object.values(uniqueArray);
// };

// console.log(permute([5, 4, 3, 9]));

// const arr = [
//   [1, 3],
//   [2, 5],
//   [1, 3],
//   [2, 5],
// ];

// const setArray = new Set(arr.map((x) => JSON.stringify(x)));

// const uniqArray = [...setArray].map((x) => JSON.parse(x));

// console.log(setArray)

function permutation(str, result) {
  if (!str.length) console.log(result);
  for (let i = 0; i < str.length; i++) {
    let rest = str.substring(0, i) + str.substring(i + 1);
    permutation(rest, result + str[i]);
  }
}

console.log(permutation("let", ""));
