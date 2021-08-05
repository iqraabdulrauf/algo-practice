//the sum of sqrs of odd numbers only

let arr2 = [1, 2, 3, 4, 5, 6];

const oddNums = arr2
  .filter((x) => x % 2 != 0)
  .reduce((sumOfSqr, e) => (sumOfSqr += Math.pow(e, 2)));

// console.log(oddNums);

// const arr = [
//   [-1, 1, -7, -8],
//   [-10, -8, -5, -2],
//   [0, 9, 7, -1],
//   [4, 4, -2, 1],
// ];

// let zeroTh = arr[0][0];
// let sumFirst = zeroTh;

// let lastTh = arr[0][arr.length - 1];
// let sumLast = lastTh;
// let current = arr.length - 2;

// for (let j = 1; j < arr.length; j++) {
//   sumFirst += arr[j][j];
//   console.log(current);
//   sumLast += arr[j][current];
//   current = current - 1;
// }

// const absDiff = Math.abs(sumFirst - sumLast);
// console.log(sumFirst, sumLast, lastTh);
// console.log(absDiff);

//  let arr = [-4, 3, -9, 0, 4, 1];
//  console.log((arr.filter((x) => x > 0).length / arr.length).toFixed(6));
// console.log((arr.filter((x) => x < 0).length / arr.length).toFixed(6));
// console.log((arr.filter((x) => x == 0).length / arr.length).toFixed(6));

//STAIR CASE
// let starStr = "";
// let n = 10;
// for (let i = 0; i < n; i++) {
//   for (let j = 1; j <= n - (i + 1); j++) {
//     starStr += " ";
//   }
//   for (let k = 0; k <= i; k++) {
//     starStr += "#";
//   }
//   starStr += "\n";
// }

// console.log(starStr);

// let arr = [2, 1, 4, 5, 5];

// arr = arr.sort((a, b) => a - b);

// let sum4 = 0;
// let sum5 = 0;
// for (let i = 0; i < arr.length - 1; i++) {
//   sum4 += arr[i];
// }
// for (let i = 1; i < arr.length; i++) {
//   sum5 += arr[i];
// }
// console.log(sum4, " ", sum5);

// let maxHeight = candles.sort((a,b)=>b-a)[0];
// console.log(candles.filter(x=>x == maxHeight).length)

// let s = "12:45:54PM";

// if (s.includes("PM")) {
//   s = s.replace("PM", "");

//   const hours = s.split(":", 1)[0];
//   if (+hours < 12) {
//     const data = s.replace(hours, String(+hours + 12));

//     return data;
//   }
// }
// if (s.includes("AM")) {
//   s = s.replace("AM", "");

//   const hours = s.split(":", 1)[0];
//   if (+hours == 12) {
//     const d = s.replace(hours, "00");
//     return d;
//   }
// }

// Convert all the words with 3 alphabets to upper case in a sentence.(JS)

// let arr = ["hello", "iqr", "school", "big"];

// arr.forEach((e, i) => {
//   if (e.length == 3) {
//     arr[i] = e.toUpperCase();
//   }
// });
// console.log(arr);

//Write a function to get prime numbers upto n.(JS)

let prime = [];
let isPrime = true;

// for (let i = 2; i < 100; i++) {
//   isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) prime.push(i);
// }
// console.log(prime);

// let primeNo = 9;
// for (let j = 2; j < primeNo; j++) {
//   isPrime = true;
//   if (primeNo % j == 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) console.log("prime num");
// else console.log("not prime");

var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;
  let arr = [];
  let char = s[0];
  let fail = false;
  for (let i = 0; i < s.length; i++) {
    if (fail) char = s[i];
    if (s[i + 1] && !char.includes(s[i + 1])) {
      char += s[i + 1];
      fail = false;
    } else {
      arr.push(char);
      fail = true;
      // if (s[i + 1]) char = s[i + 1];
    }
  }
  console.log(arr);
  let arrLengths = arr.map((x) => x.length).sort((a, b) => b - a)[0];
  return arrLengths;
};

// console.log(lengthOfLongestSubstring("dvdf"));

function getAllSubstrings(str) {
  var i,
    j,
    result = [];

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

var theString = "";
// console.log(getAllSubstrings(theString));

const substrings = getAllSubstrings(theString);

let charRepeats = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false; // repeats
    }
  }
  return true;
};
// console.log(removeDuplicateCharacters("baraban"));

substrings.forEach((ele, index, arr) => {
  arr[index] = charRepeats(ele) ? ele : '';
});
// console.log(substrings);
// console.log(substrings.map((x) => x.length).sort((a, b) => b - a)[0] || 0);










var lengthOfLongestSubstring = function (s) {
  function getAllSubstrings(str) {
    var i,
      j,
      result = [];
  
    for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {
        result.push(str.slice(i, j));
      }
    }
    return result;
  }
  
  
  
  const substrings = getAllSubstrings(s);
  
  let charRepeats = function (str) {
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
        return false; // repeats
      }
    }
    return true;
  };
  // console.log(removeDuplicateCharacters("baraban"));
  
  substrings.forEach((ele, index, arr) => {
    arr[index] = charRepeats(ele) ? ele : '';
  });
  const t =  substrings.map((x) => x.length).sort((a, b) => b - a)[0]
  return t ? t :  0;
  };
  console.log(lengthOfLongestSubstring("dvdf"),"result")




