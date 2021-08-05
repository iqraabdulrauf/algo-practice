"use strict";

let LOC = -1;
let arr = [18, 9, 1, 32, 26, 23, 19, 10];
let item = 23;
let beg = 0,
  mid = 0,
  end = arr.length - 1;

let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return inputArr;
};
arr = bubbleSort(arr);

const getMid = (beg, end) => {
  //   console.log(beg, mid, "big");
  return Math.floor((beg + end) / 2);
};

let found = false;

let binary_search = (arr) => {
  mid = getMid(beg, arr.length - 1);

  while (!found) {
    if (item == arr[mid]) {
      LOC = mid + 1;
      found = true;
    }
    if (item > arr[mid]) {
      if (beg == mid) break;
      beg = mid + 1;
      mid = getMid(beg, end);
    }
    if (item < arr[mid]) {
      if (end == mid) break;
      end = mid - 1;
      mid = getMid(beg, end);
    }
  }
  return LOC;
};
console.log(arr);
console.log("ITEM FOUDN AT POSITION : ", binary_search(arr));
