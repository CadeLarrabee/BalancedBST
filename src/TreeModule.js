import { Node } from "./NodeModule.js";
export class Tree {
  constructor(array) {
    this.array = this.SortAndRemoveDuplicates(array);
    this.root = null;
  }
  SortAndRemoveDuplicates(unsortedArray) {
    let sortedArray = unsortedArray.sort((a, b) => a - b);
    const uniqueArray = sortedArray.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    console.log(uniqueArray);
    return uniqueArray;
  }
  BuildBST(array, start, end) {
    //Build a balanced binary search tree recursively.
    if (start > end) {
      return null;
    }
    const middle = (start + end) / 2;
    const TreeNode = new Node(array[middle]);
    TreeNode.setLeftNode(BuildBST(array, start, middle - 1));
    TreeNode.setRightNode(BuildBST(array, middle + 1, end));
    return TreeNode;
  }

  PrettyPrint(node) {
    const prettyPrint = (node, prefix = "", isLeft = true) => {
      if (node === null) {
        return;
      }
      if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
      if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }
    };
  }
}
