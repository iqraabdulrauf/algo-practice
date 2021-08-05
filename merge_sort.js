function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

const mergeSort = (arr) => {
  if (arr.length == 1) return arr;

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
};

//complexity of merge sort is  O(n log(n))

// complexity of quick sort is also O(n log n)
console.log(mergeSort([2, 0, 100]));
