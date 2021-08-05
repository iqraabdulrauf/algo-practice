const getCombinations = (chars) => {
  var result = [];
  let f = (prefix, chars) => {
    // console.log(chars, "charsmmmmmm");
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  };
  f("", chars);
  return result;
};


console.log(getCombinations(["a", "b", "c", "d"]));
