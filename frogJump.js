function solution(x, y, d) {
    // write your code in JavaScript (Node.js 8.9.4)
    let res = 0;
    if ((y - x) % d == 0) {
        res = Math.floor((y - x) / d);
        console.log(res);
        return res;
    }
    res = Math.floor((y - x) / d + 1)
    console.log(res);
    return res;
}

solution(10,85,30)