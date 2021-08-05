class Stack {
  constructor() {
    this.data = [5, 6, 7];
  }

  add(record) {
    this.data.push(record);
  }

  remove() {
     this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

const stack = new Stack();
stack.add(3);
stack.add(4);
stack.add(8);

console.log(stack.data);
stack.remove()
console.log(stack.data);
