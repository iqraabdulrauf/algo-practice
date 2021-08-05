class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => node.data !== data);
  }
}

const n = new Node("a");
n.add("b");

n.add("c");
const t = new Node("b");
t.add("y");
// console.log(n.children,n);

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    //traversing through a tree with Breadth first search
    let arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      console.log(arr);
      fn(node);// anything u want to do inside - not necessary
    }
    return arr;
  }
  traverseDF(fn) {
    //traversing through a tree with depth first search
    let arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      console.log(arr);
      fn(node); // anything u want to do inside - not necessary
    }
    
  }

  lengthWidth(root) {
    let arr = [root, "s"];
    let counters = [0];

    while (arr.length > 1) {
      const node = arr.shift();
      if (node == "s") {
        arr.push("s");
        counters.push(0);
      } else {
        arr.push(...node.children);
        counters[counters.length - 1]++;
      }
    }
    return counters;
  }


}

const tree = new Tree();
const tree2 = new Tree();
tree.root = n;


console.log(n.children[0].children.push(new Node('t')));

console.log(n.children[0].children.push(new Node('s')));
console.log(n.children[0].children.push(new Node('p')));
console.log(JSON.stringify(tree));
console.log(tree.traverseDF(() => {}));
console.log(tree.lengthWidth(n));
