let text = "abcdebfgh";
let pattern = "bcd";

let s = text.length;
let r = pattern.length;

let max = s - r + 1;
let i = 0;
let index = -1;
let isMatched = false;

while (i < max) {
  // console.log(i, max);
  for (let j = 0; j < r; j++) {
    if (pattern[j] != text[i + j]) {
      i = i + 1;
      index = -1;
      isMatched = false;
      break;
    } else {
      isMatched = true;
      index = i + 1;
    }
  }

  if (isMatched) {
    break;
  }
}

console.log("pattern matched at location:", index);
return index;
