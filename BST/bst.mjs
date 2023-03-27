import removeDuplicatesSort from "./mergeSort.mjs";
import Node from "./node.mjs";

class Tree {
    constructor(array) {
        this.root = this.buildTree(removeDuplicatesSort(array));
    };

    buildTree(arr) {
        if (arr.length === 0) {
            return null;
        };

        const mid = Math.floor(arr.length / 2);
        const root = new Node(arr[mid]);

        root.left = this.buildTree(arr.slice(0, mid));
        root.right = this.buildTree(arr.slice(mid + 1));
        
        return root;
    };
};

function prettyPrint(node, prefix = '', isLeft = true) {

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

};

const tree = new Tree([1, 3, 7, 2, 2, 3]);

prettyPrint(tree.root);