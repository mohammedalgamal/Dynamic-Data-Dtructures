class LinkedList {
    constructor () {
        this.head = null;
        this.length = 0;
    };
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}