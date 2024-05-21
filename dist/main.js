/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/NodeModule.js":
/*!***************************!*\
  !*** ./src/NodeModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node {
  constructor(data, leftNode, rightNode) {
    this.data = data;
    this.left = leftNode;
    this.right = rightNode;
  }
  getData() {
    return this.data;
  }
  setLeftNode(newNode) {
    this.left = newNode;
  }
  setRightNode(newNode) {
    this.right = newNode;
  }
}


/***/ }),

/***/ "./src/TreeModule.js":
/*!***************************!*\
  !*** ./src/TreeModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tree: () => (/* binding */ Tree)
/* harmony export */ });
/* harmony import */ var _NodeModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeModule.js */ "./src/NodeModule.js");

class Tree {
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
    const TreeNode = new _NodeModule_js__WEBPACK_IMPORTED_MODULE_0__.Node(array[middle]);
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TreeModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeModule.js */ "./src/TreeModule.js");


function OnEntry() {
  const unsortedArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const BSTree = new _TreeModule_js__WEBPACK_IMPORTED_MODULE_0__.Tree(unsortedArray);
  BSTree.BuildBST(null, 0, BSTree.getArray().length);
  BSTree.prettyPrint(BSTree.getBSTRoot());
}

OnEntry();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnVDO0FBQ2hDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU8sRUFBRSx5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQ2pFO0FBQ0EscUNBQXFDLE9BQU8sRUFBRSx5QkFBeUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3JGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2QztBQUNBO0FBQ0EscUJBQXFCLGdEQUFJO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JzdC8uL3NyYy9Ob2RlTW9kdWxlLmpzIiwid2VicGFjazovL2JzdC8uL3NyYy9UcmVlTW9kdWxlLmpzIiwid2VicGFjazovL2JzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ic3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIGxlZnROb2RlLCByaWdodE5vZGUpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMubGVmdCA9IGxlZnROb2RlO1xuICAgIHRoaXMucmlnaHQgPSByaWdodE5vZGU7XG4gIH1cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gIHNldExlZnROb2RlKG5ld05vZGUpIHtcbiAgICB0aGlzLmxlZnQgPSBuZXdOb2RlO1xuICB9XG4gIHNldFJpZ2h0Tm9kZShuZXdOb2RlKSB7XG4gICAgdGhpcy5yaWdodCA9IG5ld05vZGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9Ob2RlTW9kdWxlLmpzXCI7XG5leHBvcnQgY2xhc3MgVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGFycmF5LCByb290LCBCU1QpIHtcbiAgICB0aGlzLmFycmF5ID0gdGhpcy5Tb3J0QW5kUmVtb3ZlRHVwbGljYXRlcyhhcnJheSk7XG4gICAgdGhpcy5CU1QgPSBbXTtcbiAgfVxuICBTb3J0QW5kUmVtb3ZlRHVwbGljYXRlcyh1bnNvcnRlZEFycmF5KSB7XG4gICAgbGV0IHNvcnRlZEFycmF5ID0gdW5zb3J0ZWRBcnJheS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgY29uc3QgdW5pcXVlQXJyYXkgPSBzb3J0ZWRBcnJheS5maWx0ZXIoKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuICAgIH0pO1xuICAgIHJldHVybiB1bmlxdWVBcnJheTtcbiAgfVxuICBCdWlsZEJTVCA9IChhcnJheSwgc3RhcnQsIGVuZCkgPT4ge1xuICAgIC8vQnVpbGQgYSBiYWxhbmNlZCBiaW5hcnkgc2VhcmNoIHRyZWUgcmVjdXJzaXZlbHkuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFhcnJheSkge1xuICAgICAgYXJyYXkgPSB0aGlzLmFycmF5O1xuICAgIH1cbiAgICBjb25zdCBtaWRkbGUgPSBNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKTtcbiAgICBjb25zdCBUcmVlTm9kZSA9IG5ldyBOb2RlKGFycmF5W21pZGRsZV0pO1xuICAgIHRoaXMuQlNULnB1c2goVHJlZU5vZGUpO1xuICAgIFRyZWVOb2RlLnNldExlZnROb2RlKHRoaXMuQnVpbGRCU1QoYXJyYXksIHN0YXJ0LCBtaWRkbGUgLSAxKSk7XG4gICAgVHJlZU5vZGUuc2V0UmlnaHROb2RlKHRoaXMuQnVpbGRCU1QoYXJyYXksIG1pZGRsZSArIDEsIGVuZCkpO1xuICAgIHJldHVybiBUcmVlTm9kZTtcbiAgfTtcblxuICBwcmV0dHlQcmludChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucHJldHR5UHJpbnQoXG4gICAgICAgIG5vZGUucmlnaHQsXG4gICAgICAgIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICAgIH1cbiAgfVxuICBpbnNlcnROb2RlKE5vZGUpIHtcbiAgICAvL0hhbmRsZXMgaW5zZXJ0aW5nIGEgbm9kZS5cbiAgICAvL0lmIGxlc3MgdGhhbiwgdGhlbiBsZWZ0LCBpZiBncmVhdGVyIHRoYW4sIHRoZW4gcmlnaHQuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0QlNUUm9vdCgpLmdldERhdGEoKTtcbiAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICB0aGlzLkJTVC5wdXNoKE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWVrUGxhY2UodGhpcy5nZXRCU1RSb290KCksIE5vZGUpO1xuICAgIH1cbiAgfVxuICBzZWVrUGxhY2UoY3VycmVudE5vZGUsIE5vZGUpIHtcbiAgICAvL0dpdmVuIGEgbm9kZSwgc2VlayBpdHMgcGxhY2UgcmVjdXJzaXZlbHkuXG4gICAgaWYgKGN1cnJlbnROb2RlLmdldERhdGEoKSA9PSBOb2RlLmdldERhdGEoKSkge1xuICAgICAgcmV0dXJuIFwiRVJST1IgLS0gYmFsYW5jZWQgdHJlZXMgZG9uJ3QgYWxsb3cgZHVwZXNcIjtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnROb2RlLmdldERhdGEoKSA8IE5vZGUuZ2V0RGF0YSgpKSB7XG4gICAgICBpZiAoY3VycmVudE5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudE5vZGUuc2V0UmlnaHROb2RlKE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZWtQbGFjZShjdXJyZW50Tm9kZS5yaWdodCwgTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50Tm9kZS5nZXREYXRhKCkgPiBOb2RlLmdldERhdGEoKSkge1xuICAgICAgaWYgKGN1cnJlbnROb2RlLmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudE5vZGUuc2V0TGVmdE5vZGUoTm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vla1BsYWNlKGN1cnJlbnROb2RlLmxlZnQsIE5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvL1xuICAvL0dldHRlcnNcbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cbiAgZ2V0QlNUUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5CU1RbMF07XG4gIH1cbiAgLy9cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVHJlZSB9IGZyb20gXCIuL1RyZWVNb2R1bGUuanNcIjtcblxuZnVuY3Rpb24gT25FbnRyeSgpIHtcbiAgY29uc3QgdW5zb3J0ZWRBcnJheSA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF07XG4gIGNvbnN0IEJTVHJlZSA9IG5ldyBUcmVlKHVuc29ydGVkQXJyYXkpO1xuICBCU1RyZWUuQnVpbGRCU1QobnVsbCwgMCwgQlNUcmVlLmdldEFycmF5KCkubGVuZ3RoKTtcbiAgQlNUcmVlLnByZXR0eVByaW50KEJTVHJlZS5nZXRCU1RSb290KCkpO1xufVxuXG5PbkVudHJ5KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=