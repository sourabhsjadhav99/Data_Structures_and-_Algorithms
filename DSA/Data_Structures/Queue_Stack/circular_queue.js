// class CircularQueue {
//     constructor(capacity) {
//       this.items = new Array(capacity);
//       this.rear = -1;
//       this.front = -1;
//       this.currentLength = 0;
//       this.capacity = capacity;
//     }
  
//     isFull() {
//       return this.currentLength === this.capacity;
//     }
  
//     isEmpty() {
//       return this.currentLength === 0;
//     }
  
//     size() {
//       return this.currentLength;
//     }
  
//     enqueue(item) {
//       if (!this.isFull()) {
//         this.rear = (this.rear + 1) % this.capacity;
//         this.items[this.rear] = item;
//         this.currentLength += 1;
//         if (this.front === -1) {
//           this.front = this.rear;
//         }
//       }
//     }
  
//     dequeue() {
//       if (this.isEmpty()) {
//         return null;
//       }
//       const item = this.items[this.front];
//       this.items[this.front] = null;
//       this.front = (this.front + 1) % this.capacity;
//       this.currentLength -= 1;
//       if (this.isEmpty()) {
//         this.front = -1;
//         this.rear = -1;
//       }
//       return item;
//     }
  
//     peek() {
//       if (!this.isEmpty()) {
//         return this.items[this.front];
//       }
//       return null;
//     }
  
//     print() {
//       if (this.isEmpty()) {
//         console.log("Queue is empty");
//       } else {
//         let i;
//         let str = "";
//         for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
//           str += this.items[i] + " ";
//         }
//         str += this.items[i];
//         console.log(str);
//       }
//     }
//   }
  
//   const queue = new CircularQueue(5);
//   console.log(queue.isEmpty());
//   queue.enqueue(10);
//   queue.enqueue(20);
//   queue.enqueue(30);
//   queue.enqueue(40);
//   queue.enqueue(50);
//   console.log(queue.size());
//   queue.print();
//   console.log(queue.isFull());
//   console.log(queue.dequeue());
//   console.log(queue.peek());
//   queue.print();
//   queue.enqueue(60);
//   queue.print();class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity; // Maximum size of the queue
    this.items = new Array(capacity); // Array to store queue elements
    this.front = -1; // Points to the front of the queue
    this.rear = -1;  // Points to the rear of the queue
  }

  isFull() {
    return (this.rear + 1) % this.capacity === this.front;
  }

  isEmpty() {
    return this.front === -1;
  }

  enqueue(item) {
    if (this.isFull()) {
      console.log("Queue is full");
      return;
    }

    if (this.isEmpty()) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = item;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }

    const item = this.items[this.front];
    if (this.front === this.rear) {
      // Queue is now empty
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[this.front];
  }

  size() {
    if (this.isEmpty()) {
      return 0;
    }
    if (this.rear >= this.front) {
      return this.rear - this.front + 1;
    } else {
      return this.capacity - this.front + this.rear + 1;
    }
  }
}

// Example usage:
const queue = new CircularQueue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.dequeue()); // Output: 10
queue.enqueue(60);

console.log(queue.peek());    // Output: 20
console.log(queue.size());    // Output: 5
console.log(queue.isFull());  // Output: true
console.log(queue.isEmpty()); // Output: false
