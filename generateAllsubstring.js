function getAllSubstrings(s) {
  if (!s.length) return 0;
  var i,
    j,
    result = [];

  for (i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length + 1; j++) {
      let sSplice = "";
      for (let k = i; k < j; k++) {
        if (!sSplice.includes(s[k])) {
          sSplice += s[k];
        }
      }

      if (sSplice.length == [...new Set(s)].length) {
        console.log(sSplice, "sSplice");
        result.push(sSplice);
      }
    }
  }
  const arr = [...new Set(result)];
  console.log(arr);
  return arr.sort()[0];
}

// console.log(getAllSubstrings("ecbacba"));
// let sSplice = "";
// let s = "ecbacba";
// let a = [];
// for (i = 0; i < s.length; i++) {
//   for (j = i + 1; j < s.length + 1; j++) {
//     a.push(s.slice(i, j));
//   }
// }

// console.log(a);
