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

    prepend(value) {
        const tempNode = new Node(value);
        this.length++;

        if (this.length === 1) {
            this.head = tempNode;
            return;
        };

        tempNode.nextNode = this.head;
        this.head = tempNode;
    };

    size () {
        return this.length;
    };

    getHead() {
        return this.head;
    };

    tail() {
        let pointer = this.head;

        while (pointer !== null) {
            
            if (pointer.nextNode === null) {
                break;
            };

            pointer = pointer.nextNode;
        };

        return pointer;
    };

    at(index) {
        if (index >= this.length || index < 0 || typeof index !== "number") {
            return "Error: list range exceeded!";
        };

        let pointer = this.head;

        while (index > 0) {
            pointer = pointer.nextNode;
            index--;
        };

        return pointer;
    };

    pop() {
        if (this.length === 0) {
            return null;
        };
        const last = this.tail();
        const newLast = this.at(this.length - 2);
        newLast.nextNode = null;
        this.length--;
        return last;
    };

    contains(value) {
        let pointer = this.head;

        while (pointer !== null) {
            if (pointer.value === value) {
                return true;
            }
            pointer = pointer.nextNode;
        }

        return false;
    };

    find(value) {
        let pointer = this.head;
        let index = 0;

        while (pointer !== null) {
            if (pointer.value === value) {
                return index;
            }
            pointer = pointer.nextNode;
            index++;
        };

        return null;
    };

    toString() {
        if (this.length === 0) {
            return "null";
        };

        let str = "";
        let pointer = this.head;

        while (pointer !== null) {
            str += `( ${pointer.value} ) -> `;

            if (pointer.nextNode === null) {
                str += "null";
                break;
            };

            pointer = pointer.nextNode;
        };

        return str;
    };
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}