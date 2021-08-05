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
  insertFirst(data) {
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) return null;
    // let node = this.head;
    // while (node.next) {
    //   node = node.next;
    // }
    // return node;
    return this.getAt(this.size() - 1);
  }
  clear() {
    this.head = null;
  }

  removeFirst() {
    // if (!this.head) return;
    // this.head = this.head.next;

    this.removeAt(0);
  }
  removeLast() {
    // if (!this.head) return null;
    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }
    // let node = this.head.next;
    // let prev = this.head;
    // while (node.next) {
    //   prev = node;
    //   node = node.next;
    // }
    // prev.next = null;
    this.removeAt(this.size() - 1);
  }
  insertLast(data) {
    // const last = this.getLast();
    // if (last) {
    //   //if there are existing nodes
    //   last.next = new Node(data);
    // } else {
    //   //if chain is empty
    //   this.head = new Node(data);
    // }
    this.insertAt(data, this.size() - 1);
  }
  getAt(index) {
    let count = 0;
    let node = this.head;
    while (node) {
      if (count === index) return node;
      count++;
      node = node.next;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) return;
    prev.next = prev.next.next;
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const prev = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, prev.next);
    prev.next = node;
  }

  forEach(fn) {
    let head = this.head;
    while (head) {
      head.data = fn(head);
      head = head.next;
    }
  }
}

function midpoint(list) {
  // 2 pointers i.e slow and fast
  let slow = list.getFirst(); //checks if one node ahead
  let fast = list.getFirst(); //checks if 2 nodes ahead?
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

//circular linkedlist

function circular(list) {
  //check if list is circular
  // if both pointers pointing to same node then its circular (last node is not null)
  let slow = list.getFirst(); //checks if one node ahead
  let fast = list.getFirst(); //checks if 2 nodes ahead?
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      //check if nodes are identical(not only data obj)
      return true;
    }
  }

  return false;
}

function fromLast(list, n) {
  let slow = list.getFirst(); //checks if one node ahead
  let fast = list.getFirst(); //checks if 2 nodes ahead?

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
const node = new Node(5);
const list = new LinkedList();
list.head = node;
list.insertFirst(15);
list.insertFirst(25);
list.insertFirst(35);

list.forEach((head) => (head.data += 10));

// foreach and for of loop cna be used to traverse over linkedlist

console.log(JSON.stringify(list));
