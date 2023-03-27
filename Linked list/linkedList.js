class LinkedList {
    constructor () {
        this.head = null;
        this.length = 0;
    };
    
    append(value) {
        const tempNode = new Node(value);
        this.length++;

        if (this.length === 1) {
            this.head = tempNode;
            return;
        };

        let pointer = this.head;
        while (pointer !== null) {
            if (pointer.nextNode === null) {
                pointer.nextNode = tempNode;
                break;
            };
            pointer = pointer.nextNode;
        }
    };
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}