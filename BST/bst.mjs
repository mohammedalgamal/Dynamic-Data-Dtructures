import removeDuplicatesSort from "./mergeSort.mjs";
import Node from "./node.mjs";
import prettyPrint from "./print.mjs";

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

    find(value) {
        let pointer = this.root;

        while(pointer !== null) {
            if (pointer.data === value) {
                return pointer;
            };
            pointer = value > pointer.data ? pointer.right : pointer.left;
        };

        return null;
    };

    insert(value) {
        if (this.find(value) !== null) {
            console.log("Error: value already exists!");
            return;
        };

        let pointer = this.root;
        const newNode = new Node(value);

        if (pointer === null) {
            this.root = newNode;
            return;
        };

        while (pointer !== null) {
            if (value > pointer.data) {
                if (pointer.right === null) {
                    pointer.right = newNode;
                    return;
                };
                pointer = pointer.right;
            }
            else {
                if (pointer.left === null) {
                    pointer.left = newNode;
                    return;
                };
                pointer = pointer.left;
            };
        };
    };
};

const tree = new Tree([1, 7, 4, 23, 8]);
// , 9, 4, 3, 5, 7, 9, 67, 6345, 324
tree.insert(25);
console.log(tree);
prettyPrint(tree.root);
//prettyPrint(tree.find(23));