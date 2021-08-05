var generateParenthesis = function(n) {
    const result = [];
combineParenthesis("", 0, 0);
return result;
function combineParenthesis(str, left, right) {
  if (left === n && right === n) {
    result.push(str);
    return;
  }
  if (left !== n) {
    combineParenthesis(str + "(", left + 1, right);
  }
  if (left > right) {
    combineParenthesis(str + ")", left, right + 1);
  }
}
};


console.log(generateParenthesis(3))


// using recursion technique