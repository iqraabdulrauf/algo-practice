var removeDuplicateLetters = function (s) {
  let arr = s[0];

  var count = {};
  var len = s.length;
  var index = 0;

  if (!len) return "";

  for (var i = 0; i < len; i++) {
    if (count[s[i]] === undefined) count[s[i]] = 0;
    count[s[i]]++;
  }

  for (var j = 0; j < len; j++) {
    if (s[j] < s[index]) index = j;
    if (--count[s[j]] === 0) break;
  }

  var firstChar = s[index];
  var restString = s.substr(index + 1);

  restString = restString.replace(new RegExp(firstChar, "g"), "");

  return firstChar + removeDuplicateLetters(restString);
};

console.log(removeDuplicateLetters("ecbacba"));
//ecbacba "ecbacba"
// bcabc
// cbacdcbc
// "cbaddabaa"

const s = "ecbacba";
console.log(s.substr(2));
