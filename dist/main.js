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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnVDO0FBQ2hDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU8sRUFBRSx5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQ2pFO0FBQ0EscUNBQXFDLE9BQU8sRUFBRSx5QkFBeUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3hGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2QztBQUNBO0FBQ0EscUJBQXFCLGdEQUFJO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JzdC8uL3NyYy9Ob2RlTW9kdWxlLmpzIiwid2VicGFjazovL2JzdC8uL3NyYy9UcmVlTW9kdWxlLmpzIiwid2VicGFjazovL2JzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ic3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIGxlZnROb2RlLCByaWdodE5vZGUpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMubGVmdCA9IGxlZnROb2RlO1xuICAgIHRoaXMucmlnaHQgPSByaWdodE5vZGU7XG4gIH1cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gIHNldExlZnROb2RlKG5ld05vZGUpIHtcbiAgICB0aGlzLmxlZnQgPSBuZXdOb2RlO1xuICB9XG4gIHNldFJpZ2h0Tm9kZShuZXdOb2RlKSB7XG4gICAgdGhpcy5yaWdodCA9IG5ld05vZGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9Ob2RlTW9kdWxlLmpzXCI7XG5leHBvcnQgY2xhc3MgVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGFycmF5LCByb290LCBCU1QpIHtcbiAgICB0aGlzLmFycmF5ID0gdGhpcy5Tb3J0QW5kUmVtb3ZlRHVwbGljYXRlcyhhcnJheSk7XG4gICAgdGhpcy5CU1QgPSBbXTtcbiAgfVxuICBTb3J0QW5kUmVtb3ZlRHVwbGljYXRlcyh1bnNvcnRlZEFycmF5KSB7XG4gICAgbGV0IHNvcnRlZEFycmF5ID0gdW5zb3J0ZWRBcnJheS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgY29uc3QgdW5pcXVlQXJyYXkgPSBzb3J0ZWRBcnJheS5maWx0ZXIoKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuICAgIH0pO1xuICAgIHJldHVybiB1bmlxdWVBcnJheTtcbiAgfVxuICBCdWlsZEJTVCA9IChhcnJheSwgc3RhcnQsIGVuZCkgPT4ge1xuICAgIC8vQnVpbGQgYSBiYWxhbmNlZCBiaW5hcnkgc2VhcmNoIHRyZWUgcmVjdXJzaXZlbHkuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFhcnJheSkge1xuICAgICAgYXJyYXkgPSB0aGlzLmFycmF5O1xuICAgIH1cbiAgICBjb25zdCBtaWRkbGUgPSBNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKTtcbiAgICBjb25zdCBUcmVlTm9kZSA9IG5ldyBOb2RlKGFycmF5W21pZGRsZV0pO1xuICAgIHRoaXMuQlNULnB1c2goVHJlZU5vZGUpO1xuICAgIFRyZWVOb2RlLnNldExlZnROb2RlKHRoaXMuQnVpbGRCU1QoYXJyYXksIHN0YXJ0LCBtaWRkbGUgLSAxKSk7XG4gICAgVHJlZU5vZGUuc2V0UmlnaHROb2RlKHRoaXMuQnVpbGRCU1QoYXJyYXksIG1pZGRsZSArIDEsIGVuZCkpO1xuICAgIHJldHVybiBUcmVlTm9kZTtcbiAgfTtcblxuICBwcmV0dHlQcmludChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucHJldHR5UHJpbnQoXG4gICAgICAgIG5vZGUucmlnaHQsXG4gICAgICAgIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICAgIH1cbiAgfVxuICBpbnNlcnROb2RlKE5vZGUpIHtcbiAgICAvL0hhbmRsZXMgaW5zZXJ0aW5nIGEgbm9kZS5cbiAgICAvL0lmIGxlc3MgdGhhbiwgdGhlbiBsZWZ0LCBpZiBncmVhdGVyIHRoYW4sIHRoZW4gcmlnaHQuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0QlNUUm9vdCgpLmdldERhdGEoKTtcbiAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICB0aGlzLkJTVC5wdXNoKE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWVrUGxhY2UodGhpcy5nZXRCU1RSb290KCksIE5vZGUpO1xuICAgIH1cbiAgfVxuICBzZWVrUGxhY2UoY3VycmVudE5vZGUsIE5vZGUpIHtcbiAgICAvL0dpdmVuIGEgbm9kZSwgc2VlayBpdHMgcGxhY2UgcmVjdXJzaXZlbHkuXG4gICAgaWYgKGN1cnJlbnROb2RlLmdldERhdGEoKSA9PSBOb2RlLmdldERhdGEoKSkge1xuICAgICAgcmV0dXJuIFwiRVJST1IgLS0gYmFsYW5jZWQgdHJlZXMgZG9uJ3QgYWxsb3cgZHVwZXNcIjtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnROb2RlLmdldERhdGEoKSA8IE5vZGUuZ2V0RGF0YSgpKSB7XG4gICAgICBpZiAoY3VycmVudE5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudE5vZGUuc2V0UmlnaHROb2RlKE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZWtQbGFjZShjdXJyZW50Tm9kZS5yaWdodCwgTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50Tm9kZS5nZXREYXRhKCkgPiBOb2RlLmdldERhdGEoKSkge1xuICAgICAgaWYgKGN1cnJlbnROb2RlLmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudE5vZGUuc2V0TGVmdE5vZGUoTm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vla1BsYWNlKGN1cnJlbnROb2RlLmxlZnQsIE5vZGUpO1xuICAgICAgfVxuICAgICAgaWYgKHJvb3QgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy9cbiAgLy9HZXR0ZXJzXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG4gIGdldEJTVFJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuQlNUWzBdO1xuICB9XG4gIC8vXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi9UcmVlTW9kdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIE9uRW50cnkoKSB7XG4gIGNvbnN0IHVuc29ydGVkQXJyYXkgPSBbMSwgNywgNCwgMjMsIDgsIDksIDQsIDMsIDUsIDcsIDksIDY3LCA2MzQ1LCAzMjRdO1xuICBjb25zdCBCU1RyZWUgPSBuZXcgVHJlZSh1bnNvcnRlZEFycmF5KTtcbiAgQlNUcmVlLkJ1aWxkQlNUKG51bGwsIDAsIEJTVHJlZS5nZXRBcnJheSgpLmxlbmd0aCk7XG4gIEJTVHJlZS5wcmV0dHlQcmludChCU1RyZWUuZ2V0QlNUUm9vdCgpKTtcbn1cblxuT25FbnRyeSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9