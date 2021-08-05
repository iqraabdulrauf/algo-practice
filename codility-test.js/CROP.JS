function solution(message, K) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (!message.length) return message;

  let cropped = "";
  const split = message.split(" ");
  let i = 0;
  while (cropped.trim().length < K && split[i]) {
    let copy = cropped;
    copy += split[i] + " ";
    
    if (copy.trim().length > K) return cropped.trim();

    cropped = copy;
    i++;
  }
  return cropped.trim();
}

console.log(solution("hello iqra how are you tooday in this test", 5));
