//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//                           STRING REVERSE
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let strings = "hello";

const reversed = strings.split("").reduce((reversed, str) => str + reversed);
console.log(reversed);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//                           PALINDROME
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let str = "madam";
console.time();
let rev = str.split("").reverse().join("");
console.log("join");
console.timeEnd();
console.log(str == rev);

// or
console.time();
let rev2 = str.split("").every((x, i) => x == str[str.length - i - 1]);
console.log(rev2, "every");
console.timeEnd();

//or
console.time();
const palindrome1 = (str) => {
  let pointer1 = 0;
  let pointer2 = str.length - 1;
  while (pointer1 < pointer2) {
    if (str[pointer1] != str[pointer2]) return false;
    pointer1++;
    pointer2--;
  }
  return true;
};
palindrome1(str);

console.timeEnd();

// OR
console.time();

function palindrome(str) {
  var len = str.length;
  var mid = Math.floor(len / 2);

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}
console.log(palindrome(str), "midddddddd");
console.timeEnd();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// reverse ineteger
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let int = 256;
let int1 = -32;
let int3 = 500;

// uanry plus works only for strings which contain number
const reverseInt = (n) => {
  const reversedInt = `${n}`.split("").reverse().join("");
  return parseInt(reversedInt) * Math.sign(n);
};

console.log(reverseInt(int3));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// max char
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// u can use this technique for angaram,string duplicate,occurrence,max char

let character = "hello there!";
let map = {};

const maxChar = () => {
  for (let char of character) {
    if (map[char]) map[char]++;
    else {
      map[char] = 1;
    }
  }

  let max = 0;
  let maxChar = "";
  for (let i in map) {
    if (map[i] > max) {
      max = map[i];
      maxChar = i;
    }
  }
  // return Math.max(...Object.values(map));
  return maxChar;
};

console.log(maxChar());

// fizzbuzz

// for (let i = 1; i < 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) console.log("fizz");
//   else if (i % 5 === 0) console.log("buzz");
//   else console.log(i);
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// array chunks
//
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const arrayy = [1, 2, 3, 4, 5];
const chunk = 4;
const arrayChunk = (arrayy, chunk) => {
  let chunkArr = [];
  let index = 0;
  while (index < arrayy.length) {
    // let inner = [];
    // for (let j = i; inner.length < chunk; j++) {
    //   inner.push(arrayy[j]);
    // }
    // chunkArr.push(inner);
    chunkArr.push(arrayy.slice(index, index + chunk));
    index += chunk;
  }
  return chunkArr;
};

console.log(arrayChunk(arrayy, chunk));

// to remove special characters and spaces from strings use regex :

console.log("hello there!!!".replace(/[^\w]/g, ""));

// anagrams

const hello = "helloworld";
const hello2 = "hell        !!! oworld";
const map1 = {};
const map2 = {};
// const isAnagram = (str, str1) => {
//   if (str != str1) return false;
//   for (let char of str.replace(/[^\w]/g, "")) {
//     if (map1[char]) map1[char]++;
//     else map1[char] = 1;
//   }
//   for (let char of str1.replace(/[^\w]/g, "")) {
//     if (map2[char]) map2[char]++;
//     else map2[char] = 1;
//   }

//   console.log(map1,map2);
//   for (let i in map1) {
//     if (map1[i] != map2[i]) return false;

//   }
//   return true;
// };

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// anagram
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const cleanString = (str) => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};

const isAnagram = (hello, hello2) => {
  return cleanString(hello) === cleanString(hello2);
};
console.log(isAnagram(hello, hello2));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//sentence capitalize
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const capitalize = (str) => {
  let string = str.split(" ");
  string.forEach((e, index) => {
    let ele = string[index];
    ele = ele[0].toUpperCase() + ele.slice(1);
    string[index] = ele;
  });
  return string.join(" ");
};

console.log(capitalize("hi there how are you"));

//vowels =
const strV = "hello";
const vowels = (str) => {
  const matched = str.match(/[aeiou]/gi, str);
  console.log(matched);
  return matched ? matched.length : 0;
};

console.log(vowels(strV),"vowelsssssss");





























const s = "(())(";
const leftBracket = s.match(/[(]/g, s);
console.log(leftBracket);

const size = 2;
const keyTimes = [
  [0, 3],
  [20, 5],
  [2, 6],
  [15, 7],
  [9, 8],
  [19, 9],
  [24, 10],
  [4, 12],
  [3, 13],
];
const mapObj = {};
let max = "";
let diff = 0;
const alphabets = "abcdefghijklmnopqrstuvwxyz";

let sii = {};
for (var i = 0; i <= 25; i++) {
  // sii += String.fromCharCode( i );
  sii[alphabets[i]] = i;
}

for (let i = 0; i < keyTimes.length; i++) {
  const obj = keyTimes[i][1];
  if (keyTimes[i + 1] && keyTimes[i + 1][1] - keyTimes[i][1] > diff) {
    max = keyTimes[i + 1][0];
    diff = keyTimes[i + 1][1] - keyTimes[i][1];
  }
}
console.log("mapObj", diff);
for (let i in sii) {
  // if (sii[i] == max) return i;
}


let tr = '()))))(('
let map3 = {};
for (let char of tr) {
  if (map3[char]) map3[char]++;
  else {
    map3[char] = 1;
  }
}

console.log(Math.abs(map3[')'] - map3['(']))
console.log(map3,"eeeeeeeee");


