const s = "Ab";
let numRows = 1;

const matrix = new Array(numRows).fill(0).map(() => new Array(numRows).fill(0));
// console.log(matrix);
let z = 0;

while (z < s.length) {
  let i = 0;
  while (s[z]) {
    //   for (let i = 0; i < 11; i = i + (n - 1)) {
    for (let j = 0; j < numRows; j++) {
      let str = z;
      if (j == numRows - 1) {
        let index = i;

        for (let k = numRows - 2; k > 0; k--) {
          index = index + 1;
          //   console.log(str, index, s[str], j, "s[str]");
          str = str + 1;

          matrix[k][index] = s[str];
        }

        matrix[j][i] = s[z];
        z = str;
        console.log(matrix[j][i], i, j, z - 1, s[z - 1], str, "s[z]");
      } else matrix[j][i] = s[str];

      z++;
    }

    // console.log(z, "iiiiiiiii");
    i = i + (numRows - 1);
  }
}

let arr = matrix.map((x) => x.filter((f) => f).join("")).join("");
console.log(arr, "arr");

if (numRows == 1) console.log(s, "s");
console.log(JSON.stringify(matrix));
// console.log(matrix);
return matrix;

let convert = (s, numRows) => {
  let z = 0;
  const matrix = new Array(numRows)
    .fill(0)
    .map(() => new Array(numRows).fill(0));

  while (z < s.length) {
    let i = 0;
    while (s[z]) {
      //   for (let i = 0; i < 11; i = i + (n - 1)) {
      for (let j = 0; j < numRows; j++) {
        let str = z;
        if (j == numRows - 1) {
          let index = i;

          for (let k = numRows - 2; k > 0; k--) {
            index = index + 1;
            str = str + 1;
            matrix[k][index] = s[str];
            z = str;
          }
          matrix[j][i] = s[z];
        } else matrix[j][i] = s[str];

        z++;
      }
      i = i + (numRows - 1);
    }
  }
  console.log(JSON.stringify(matrix));
  return matrix;
};

// console.log(convert(s, numRows));
