import { Node } from "./NodeModule.js";
export class Tree {
  constructor(array, root, BST) {
    this.array = this.SortAndRemoveDuplicates(array);
    this.BST = [];
  }
  SortAndRemoveDuplicates(unsortedArray) {
    let sortedArray = unsortedArray.sort((a, b) => a - b);
    const uniqueArray = sortedArray.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    return uniqueArray;
  }
  BuildBST = (array, start, end) => {
    //Build a balanced binary search tree recursively.
    if (start > end) {
      return null;
    }
    if (!array) {
      array = this.array;
    }
    const middle = Math.floor((start + end) / 2);
    const TreeNode = new Node(array[middle]);
    this.BST.push(TreeNode);
    TreeNode.setLeftNode(this.BuildBST(array, start, middle - 1));
    TreeNode.setRightNode(this.BuildBST(array, middle + 1, end));
    return TreeNode;
  };

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
  insertNode(Node) {
    //Handles inserting a node.
    //If less than, then left, if greater than, then right.
    const data = this.getBSTRoot().getData();
    if (data == null) {
      this.BST.push(Node);
    } else {
      seekPlace(this.getBSTRoot(), Node);
    }
  }
  seekPlace(currentNode, Node) {
    //Given a node, seek its place recursively.
    if (currentNode.getData() == Node.getData()) {
      return "ERROR -- balanced trees don't allow dupes";
    }
    if (currentNode.getData() < Node.getData()) {
      if (currentNode.right === null) {
        currentNode.setRightNode(Node);
        return true;
      } else {
        seekPlace(currentNode.right, Node);
      }
    } else if (currentNode.getData() > Node.getData()) {
      if (currentNode.left === null) {
        currentNode.setLeftNode(Node);
        return true;
      } else {
        seekPlace(currentNode.left, Node);
      }
      if (root == null) {
        return root;
      }
    }
  }
  //
  //Getters
  getArray() {
    return this.array;
  }
  getBSTRoot() {
    return this.BST[0];
  }
  //
}
