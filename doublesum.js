const arrayy = [3, 2, 6, -1, 4, 5, -1, 2];
const chunk = 2;
const arrayChunk = (arrayy, chunk) => {
  let chunkArr = [];
  let index = 0;
  while (index < arrayy.length) {
    chunkArr.push(arrayy.slice(index, index + chunk));
    index += chunk;
  }
  console.log(chunkArr);
  const arr = [];
  arr.push(...chunkArr.map((ele) => ele.reduce((tot, e) => (tot += e))));
  console.log(arr, "arr");

  return Math.max(...arr);
};

console.log(arrayChunk(arrayy, chunk));
