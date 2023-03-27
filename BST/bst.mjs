import removeDuplicatesSort from "./mergeSort.mjs";
import Node from "./node.mjs";

class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    };

    buildTree(array) {
        return;
    }

    prettyPrint(node, prefix = '', isLeft = true) {

        if (node === null) {
           return;
        };

        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        };

        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        };
        
      }
}