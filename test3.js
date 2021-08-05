let prime = [];
for (let i = 1; i < 100; i++) {
  for (let j = 2; j <= i; j++) {
    if (i == j) {
      prime.push(i);
      break;
    }
    if (i % j == 0) {
      break;
    }
  }
}
// console.log(prime);

// prime nos
//  factorial
// fibinacci
// even/odd
// sum

function factorial(n) {
  //   let ans = 1;
  //   for (let i = 1; i <= n; i++) {
  //     ans *= i;
  //   }
  //   return ans;

  if (n < 2) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

const fib = (n) => {
  //   let first = 0;
  //   let second = 1;
  //   let final = 0;
  //   let arr = [];
  //   while (final <= n) {
  //     final = first + second;
  //     first = second;
  //     second = final;
  //     arr.push(final);
  //   }
  //   return arr;

  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};
// console.log(fib(10));

// const even = () => {
//   for (let i = 0; i < 100; i = i + 2) {
//     console.log(i);
//   }
// };
// console.log(even());

//reverse a string

const str = "iqra";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
const reversed = str.split("").reduce((reversed, str) => str + reversed);

const mr = str.split("").reduce((reversed, str) => str + reversed);
console.log(mr);

// palindrome

const m = "iqra";
const palindrome = (str) => {
  let pointer1 = 0;
  let pointer2 = str.length - 1;
  while (pointer1 < pointer2) {
    if (str[pointer1] !== str[pointer2]) return false;
    pointer2--;
    pointer1++;
  }
  return true;
};

// console.log(palindrome(m));

//  reverse integer

let int = 256;
let int1 = -32;
let int3 = 500;

const reverseInt = (n) => {
  const r = `${n}`.split("").reverse().join("");
  return parseInt(r) * Math.sign(n);
};

console.log(reverseInt(int1));

//  max char

let character = "hello there!";

const map = {};

for (let char of character) {
  if (map[char]) map[char]++;
  else map[char] = 1;
}

let max = 0;
let maxChar = "";
for (let i in map) {
  if (map[i] > max) {
    max = map[i];
    maxChar = i;
  }
}
console.log(max, maxChar);

//  fizz buzz
// for (let i = 0; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//     // break;
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//     // break;
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//     // break;
//   } else console.log(i);
// }

const arrayy = [1, 2, 3, 4, 5];
const chunk = 3;

const chunkArr = (arrayy, chunk) => {
  let arr = [];
  let index = 0;
  while (index < arrayy.length) {
    arr.push(arrayy.slice(index, index + chunk));
    index += chunk;
  }
  return arr;
};

console.log(chunkArr(arrayy, chunk), "hhhh");

console.log("hello there!!!".replace(/[^\w]/g, ""));

// anagram
const cleanString = (str) => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};

const anagram = (str, str2) => {
  return cleanString(str) === cleanString(str2);
};

console.log(anagram("hello", "hello"));

const capitalize = (str) => {
  const strt = str.split(" ");
  let newStr = "";
  strt.forEach((element) => {
    let e = element[0].toUpperCase() + element.slice(1);
    newStr += e + " ";
  });
  return newStr.trim();
};
console.log(capitalize("hi there how are you"));

//vowels

const v = "helloiqra";
const vowels = (v) => {
  const match = v.match(/[aeiou]/gi, str);
  console.log(match, "match");
  return match ? match.length : 0;
};

console.log(vowels(v));

// linear search
// binary search
// bubble sort

// stack/queue/ queue from 2 stacks

// construct bst, validata,BFS,DFS,levelwidth

// linkedList, midpoint

// pattern matching

const arr = [1, 5, 3, 2, 4];
const linearSearch = (n) => {
  //   let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (n === arr[i]) return i;
  }
  return -1;
};
console.log(linearSearch(2));

// bubblesort

const bubble = (inputArr) => {
  let swapped = false;
  do {
    swapped = false;
    for (i = 0; i < inputArr.length; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return inputArr;
};
console.log(bubble([1, 4, 5, 6, 2]));

const b = (arr) => {
  let swapped = false;
  do {
    swapped = false;
    for (let index = 0; index < arr.length; index++) {
      if (array[index] > array[index + 1]) {
        let tmp = array[index];
        array[index + 1] = array[index];
        array[index] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
};

let beg = 0,
  mid = 0,
  end = arr.length - 1;
const getMid = (beg, end) => Math.floor((beg + end) / 2);

const binarySearch = (arr, data) => {
  console.log(arr);
  mid = getMid(beg, end);
  let LOC = -1;
  let found = false;

  while (!found) {
    if (arr[mid] == data) {
      LOC = mid + 1;
      found = true;
    }
    if (data < arr[mid]) {
      if (end === mid) break;
      end = mid - 1;
      mid = getMid(beg, end);
    }
    if (data > arr[mid]) {
      if (beg === mid) break;
      beg = mid + 1;
      mid = getMid(beg, end);
    }
  }
  return LOC;
};

console.log(binarySearch(bubble([1, 4, 5, 6, 2]), 5));

class Stack {
  constructor(data) {
    this.data = data;
  }

  add(d) {
    this.data.push(d);
  }

  remove() {
    this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
class Queue {
  constructor(d) {
    this.data = d;
  }

  add(d) {
    this.data.unshift(d);
  }

  remove() {
    this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class Q {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }
  add(s) {
    this.first.push(s);
  }
  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const rec = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return rec;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const rec = this.second.peek();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return rec;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => node.data != data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      let node = arr.shift();
      arr.push(...node.children);
      console.log(arr);
      //   fn;
    }
    return arr;
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      let node = arr.shift();
      arr.unshift(...node.children);
      console.log(arr);
    }
    return arr;
  }

  levelWidth() {
    const arr = [this.root, "s"];
    const counter = [];

    while (arr.length > 1) {
      const node = arr.shift();
      if (node === "s") {
        arr.push("s");
        counter.push(0);
      } else {
        arr.push(...node.children);
        counter[counter.length - 1]++;
      }
    }
    return counter;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(d) {
    if (d < this.data && this.left) {
      this.left.insert(d);
    } else if (d < this.data) {
      this.left = new Node(d);
    }

    if (d < this.data && this.right) {
      this.right.insert(d);
    } else if (d < this.data) {
      this.right = new Node(d);
    }
  }

  contains(s) {
    if (s === this.data) return this;

    if (s > this.data && this.right) {
      return this.data.contains(s);
    }

    if (s < this.data && this.left) {
      return this.data.contains(s);
    }
    return null;
  }
}
const validate = (node, min = null, max = null) => {
  if (max !== null && node.data > max) return false;
  if (min !== null && node.data < min) return false;

  if (node.right && !validate(node.right, node.data, min)) return false;
  if (node.left && !validate(node.left, min, node.data)) return false;

  return true;
};

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addFirst(data) {
    this.head = new Node(this.head, data);
  }

  getLast() {
    if (!this.head) return null;
    let node = this.head;

    while (node) {
      node = node.next;
    }
    return node;
  }
  clear() {
    this.head = null;
  }
}
const midPoint = (list) => {
  const fast = list.head;
  const slow = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
// given an array , you are expected to return the sum of sqrs of odd numbers only
const array = [2, 6, 7, 8, 1];

const sumSqr = (array) => array.map((x) => x * x);

console.log(sumSqr(array,"ooooo"))
