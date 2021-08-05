class Queue {
  constructor() {
    this.data = [1, 2, 3];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

}

const queue = new Queue();
queue.add(5);

console.log(queue.data);
console.log(queue.remove(), queue.peek());
