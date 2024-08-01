class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    // 1
    isEmpty() {
        return this.size === 0;
    }
    // 2
    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    push(value) {
        this.prepend(value);
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    pop() {
        return this.removeFromFront();
    }

    peek() {
        return this.head.value;
    }


    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head;
            let list = "";
            while (curr) {
                list += `${curr.value} `;
                curr = curr.next;
            }
            console.log(list);
        }
    }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.getSize());
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.peek());
