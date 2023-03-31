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

    #getFarLeft(node) {
        let pointer = node;

        while(pointer.left !== null) {
            pointer = pointer.left;
        };

        return pointer;
    };

    #getParent(node) {
        if (node === this.root) {
            console.log("Error: can't get parent of root node!");
            return node;
        };

        let parent = this.root; 

        while (parent.left !== node && parent.right !== node) {
            if (node.data > parent.data) {
                parent = parent.right;
            }
            else {
                parent = parent.left;
            };
        };

        return parent;
    };

    #hasOneChild(node) {
        const firstCondition = (node.left !== node.right);
        const secondCondition = ((node.left === null) || (node.right === null));

        if (firstCondition && secondCondition) {
            return true;
        };

        return false;
    };

    #getNextLevel(array) {
        const nextLevelNodes = [];

        array.map((node) => {
            if(node.left) nextLevelNodes.push(node.left);
            if(node.right) nextLevelNodes.push(node.right);
        });

        return nextLevelNodes;
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

    delete(value) {
        let targetNode = this.find(value);

        if (targetNode === null) {
            console.log("Error: value doesn't exist!");
            return;
        };

        let parent = targetNode === this.root ? this.root : this.#getParent(targetNode);

        if (targetNode.left === null && targetNode.right === null) {
            if (targetNode === this.root) {
                this.root = null;
                return;
            };

            if (targetNode.data > parent.data) {
                parent.right = null;
                return;
            }
            else {
                parent.left = null;
                return;
            };
        } 
        else if (this.#hasOneChild(targetNode)) {
            if (targetNode === this.root) {
                this.root = targetNode.left === null ?
                targetNode.right : targetNode.left;
                return;
            };
            
            if (parent.left === targetNode) {
                parent.left = targetNode.left === null ?
                targetNode.right : targetNode.left;
                return;
            }
            else {
                parent.right = targetNode.left === null ?
                targetNode.right : targetNode.left;
                return;
            };
        }
        else {
            const rightSubTree = targetNode.right;
            const farLeft = this.#getFarLeft(rightSubTree);
            const farLeftParent = this.#getParent(farLeft);
            targetNode.data = farLeft.data;

            if (farLeftParent === targetNode) {
              targetNode.right = farLeft.right;
              return;  
            };
        
            farLeftParent.left = farLeft.right;
        };

        return parent
    };

    levelOrder(callBack) {
        if (this.root === null) {
            return;
        };

        const fullArray = [];
        const BFSArray = [];
        BFSArray.push(this.root);

        while(BFSArray.length > 0) {
            let pointer = BFSArray.shift();
            fullArray.push(pointer.data);
            
            if (pointer.left !== null) {
                BFSArray.push(pointer.left);
            };
            
            if (pointer.right !== null) {
                BFSArray.push(pointer.right);
            };
        };

        if (typeof callBack !== "function") {
            return fullArray;
        };

        fullArray.map(callBack);
    };

    preOrder(callBack) {
        if (this.root === null) {
            return;
        };

        const fullArray = [];
        const DFSArray = [];
        DFSArray.push(this.root);

        while(DFSArray.length > 0) {
            let pointer = DFSArray.pop();
            fullArray.push(pointer.data);
            
            if (pointer.right !== null) {
                DFSArray.push(pointer.right);
            };

            if (pointer.left !== null) {
                DFSArray.push(pointer.left);
            };
        };

        if (typeof callBack !== "function") {
            return fullArray;
        };

        fullArray.map(callBack);
    };

    inOrder(callBack) {
        if (this.root === null) {
            return;
        };

        const fullArray = [];
        const DFSArray = [];
        let current = this.root;

        while(DFSArray.length > 0 || current !== null) {
        
            while (current !== null) {
                DFSArray.push(current);
                current = current.left;
            };

            const item = DFSArray.pop();
            fullArray.push(item.data);
            current = item.right;
        };

        if (typeof callBack !== "function") {
            return fullArray;
        };

        fullArray.map(callBack);
    };

    postOrder(callBack) {
        if (this.root === null) {
            return;
        };

        let fullArray = [];
        const DFSArray = [];
        DFSArray.push(this.root);

        while(DFSArray.length > 0) {
            let pointer = DFSArray.pop();
            fullArray.push(pointer.data);
            
            if (pointer.left !== null) {
                DFSArray.push(pointer.left);
            };

            if (pointer.right !== null) {
                DFSArray.push(pointer.right);
            };

        };

        fullArray = fullArray.reverse();

        if (typeof callBack !== "function") {
            return fullArray;
        };

        fullArray.map(callBack);
    };

    height(node = this.root) {
        if (node === null) {
            return 0;
        };

        let nodesArray = [node];
        let height = 0;

        while(nodesArray.length > 0) {
            nodesArray = this.#getNextLevel(nodesArray);
            height++;
        };

        return height - 1;
    };

    depth(node = this.root) {
        if (this.root === null) {
            return 0;
        };

        let pointer = this.root;
        const target = node;
        let counter = 0;

        while (pointer !== target) {
            pointer = pointer.data > target.data ? pointer.left : pointer.right;
            counter++;
        };
        
        return counter;
    };

    isBalanced(node = this.root) {
        if (node === null) {
            return true;
        };
        const balanceCondition = Math.abs(this.height(node.left) - this.height(node.right)) <= 1;
        return balanceCondition && this.isBalanced(node.left) && this.isBalanced(node.right);
    };
};

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
// , 9, 4, 3, 5, 7, 9, 67, 6345, 324
/* tree.insert(25);
tree.insert(24);
tree.insert(10);
tree.insert(11); */
/* console.log(tree);
tree.delete(1);
tree.delete(324);
tree.delete(4); */
//tree.delete(4);
//tree.levelOrder(x);
//const x = function(a) {console.log(a*2)}; 
prettyPrint(tree.root);
//console.log(tree.isBalanced());
//console.log(tree.depth(tree.find(324)));
//console.log(tree.height());
//console.log(tree.postOrder());
//tree.levelOrder(x);
//prettyPrint(tree.getParent(null));
//prettyPrint(tree.find(23));