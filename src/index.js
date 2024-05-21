import { Tree } from "./TreeModule.js";

function OnEntry() {
  const unsortedArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const BSTree = new Tree(unsortedArray);
  BSTree.BuildBST(null, 0, BSTree.getArray().length);
  BSTree.prettyPrint(BSTree.getBSTRoot());
}

OnEntry();
