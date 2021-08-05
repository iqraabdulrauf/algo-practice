class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  //BST
  insert(data) {
    // insert node in binary search tree
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    }
    if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data < this.data) {
      this.right = new Node(data);
    }
  }
  contains(data) {
    // if BST contains a specific node like '3'
    if (data == this.data) return this;

    if (data > this.data && this.right) {
      return this.data.contains(data);
    }
    if (data < this.data && this.left) {
      return this.data.contains(data);
    }
    return null;
  }
}

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) return false;
  if (min !== null && node.data < min) return false;

  if (node.left && !validate(node.left, min, node.data)) return false;
  if (node.right && !validate(node.right, node.data, max)) return false;
  return true;
}
