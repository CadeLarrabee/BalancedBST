export class Node {
  constructor(data, leftNode, rightNode) {
    this.data = data;
    this.left = leftNode;
    this.right = rightNode;
  }
  setLeftNode(newNode) {
    this.left = newNode;
  }
  setRightNode(newNode) {
    this.right = newNode;
  }
}
