"use strict";

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (minIndex != i) {
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}


// O(N^2)
console.log(selectionSort([32, 18, 26, 23]));
