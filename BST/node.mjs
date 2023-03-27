export default class Node {
    constructor (value = null, leftChild = null, rightChild = null) {
        this.data = value;
        this.left = leftChild;
        this.right = rightChild;
    }
}