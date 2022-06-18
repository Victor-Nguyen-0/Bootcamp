class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        let newNode = new SLLNode(val);
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    removeFront() {
        let removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }

    front () {
        if (this.head == null) {
            return null;
        }
        else {
            return this.head.value;
        }
    }
}

let mySLL = new SLL();

mySLL.addFront(10)
mySLL.addFront(5);
mySLL.addFront(73);

// console.log(mySLL);
// console.log(mySLL.head.next)

// mySLL.removeFront();
// console.log(mySLL);
// mySLL.removeFront();
// console.log(mySLL);
// mySLL.removeFront();
// console.log(mySLL);

console.log(mySLL.front());
mySLL.removeFront();
console.log(mySLL.front());
mySLL.removeFront();
console.log(mySLL.front());
mySLL.removeFront();
console.log(mySLL.front());