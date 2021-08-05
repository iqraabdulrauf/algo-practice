// let arr = [10, 30, 20, 40];

let arr = [15, 9, 90, 13, 18,  120, 30, 40];

const rank = (arr) => {
 
  let rank = 0;
  let rankArr = [];
  for (let i = 0; i < arr.length; i++) {
    rank = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        rank++;
      }
    }
    rankArr.push(Math.abs(rank - arr.length) + 1);
  }
  return rankArr;
};

console.log(rank(arr));

function findLeast(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      console.log("iii", i);
      return i;
    }
  }
}

function getAllIndexes(arr, val) {
  var indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}

const elementRank = (arr) => {
  let sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
  let ranks = [];
  for (let i = 0; i < sorted.length; i++) {
    let rank = 0;
    if (arr[i] == arr[i - 1]) {
      rank = ranks[ranks.length - 1];
    } else {
      rank = i + 1;
    }
    ranks.push(rank);
  }
  return ranks;
};
 console.log(elementRank(arr));
