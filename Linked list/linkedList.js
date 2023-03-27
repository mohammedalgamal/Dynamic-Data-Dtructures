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

    insertAt(index, value) {
        if (index > this.length) {
            console.log("Error: list range exceeded!");
            return;
        };

        if (index === 0) {
            this.prepend(value);
            return;
        };

        if (index === this.length) {
            this.append(value);
            return;
        };

        const previous = this.at(index - 1);
        const newNode = new Node(value, this.at(index));
        previous.nextNode = newNode;
        this.length++;
        return;
    };

    removeAt(index) {
        if (index >= this.length) {
            console.log("Error: list range exceeded!");
            return;
        };

        if (index === 0) {
            this.head = this.length > 1 ? this.at(1) : null;
            this.length--;
            return;
        };

        if (index === this.length - 1) {
            this.at(this.length - 2).nextNode = null;
            this.length--;
            return;
        };

        this.at(index - 1).nextNode = this.at(index + 1);
        this.length--;
        return;
    };
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list = new LinkedList();
// list.append(5);
// list.append(3);
// list.removeAt(1);
// list.removeAt(0);
// console.log(list.toString());
// list.append(1);
//list.prepend(5);
//list.prepend(2);
//list.append(13);
//list.prepend(139);
//list.append(-1225);
/*console.log(list.toString());
console.log(list.size());
console.log(list.getHead());
console.log(list.tail());
console.log(list.at(3));
console.log(list.pop());
console.log(list.toString());
console.log(list.contains(13));
console.log(list.contains(9283));
console.log(list.find(55615));
console.log(list.find(2));
console.log(list.find(139));
console.log(list.find(13));
list.insertAt(2, 458);
list.insertAt(0, 10);
list.insertAt(6, 25745);
list.insertAt(4, 54587456);
list.insertAt(2468, 0);
console.log(list.toString(), list.length);
list.removeAt(0);
list.removeAt(15);
list.removeAt(6);
list.removeAt(2);
console.log(list.toString(), list.length);*/