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

  findData(root, data) {
    //run until we find the lowest left node the "in-order predecessor"
    if (data > root.right.data && data < root.right.data) {
      return root;
    }
    if (data < root.left) {
      this.findData(root.left, data);
    } else if (data > root.right) {
      this.findData(node.right, data);
    }
  }

  RemoveNode(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(root, data) {
    function findMin(node) {
      //run until we find the lowest left node the "in-order predecessor"
      while (node.left != null) {
        node = node.left;
      }
      return node;
    }

    //Empty case, nothing here
    if (root === null) {
      return root;
    }

    if (data < root.data) {
      root.left = removeNode(root.left, data);
    } else if (data > root.data) {
      root.right = removeNode(root.right, data);
    } else {
      // Node to be removed is found
      //
      //If there is no children, set the root to null
      if (root.left == null && root.right == null) {
        return null;
      }
      //else if there is one child, return it as the new root node
      else if (root.left == null) {
        return root.right;
      } else if (root.right == null) {
        return root.left;
      }
      //If there are more than one child, find the successor on the left side of its tree
      //continue removing until we have a stable tree
      else {
        let successor = findMin(root.right);
        root.data = successor.data;
        root.right = this.removeNode(root.right, successor.data);
      }
    }
  }

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
