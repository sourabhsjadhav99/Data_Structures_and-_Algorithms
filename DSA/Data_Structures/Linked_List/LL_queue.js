class LinkedListQueue {
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
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    enqueue(value) {
        this.append(value);
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
    dequeue() {
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

const queue = new LinkedListQueue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.getSize());
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.peek());

