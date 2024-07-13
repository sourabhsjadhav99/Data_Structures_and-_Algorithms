// class Queue {
//     constructor() {
//       this.items = [];
//     }

//     enqueue(element) {
//       this.items.push(element);
//     }

//     dequeue() {
//       if (this.isEmpty()) {
//         return null;
//       }
//       return this.items.shift();
//     }

//     peek() {
//       if (this.isEmpty()) {
//         null
//       }
//       return this.items[0];
//     }

//     isEmpty() {
//       return this.items.length === 0;
//     }

//     size() {
//       return this.items.length;
//     }

//     print() {
//       console.log(this.items.join(" "));
//     }
//   }

//   const queue = new Queue();
//   console.log(queue.isEmpty());
//   queue.enqueue(10);
//   queue.enqueue(20);
//   queue.enqueue(30);
//   console.log(queue.size());
//   queue.print();
//   console.log(queue.dequeue());
//   console.log(queue.peek());
//   queue.print();

//-----------------------------------------------------------------------------------
//   queue object 
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
queue.print();
//----------------------------------------------------------------------------------------------------
//  let queue = [];
// let currentSize = queue.length;
// let maxSize = 5;

// function enqueue(newVal) {
//   if (currentSize >= maxSize) {
//     alert("Queue is already full");
//   } else {
//     queue[currentSize] = newVal;
//     currentSize++;
//   }
// }


// function display() {
//   console.warn(queue);
// }
// function dequeue() {
//   if (!isEmpty()) {
//     for (let i = 0; i < queue.length; i++) {
//       queue[i] = queue[i + 1];
//     }
//     currentSize--;
//     queue.length = currentSize;
//   } else {
//     alert("queue is already empty");
//   }
// }
// function front() {
//   if (!isEmpty()) {
//     console.warn(queue[0]);
//   } else {
//     alert("queue is already empty");
//   }
// }

// function rear() {
//   if (!isEmpty()) {
//     console.warn(queue[currentSize - 1]);
//   } else {
//     alert("queue is already empty");
//   }
// }
// function isEmpty() {
//   if (currentSize <= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // enqueue(10);
// // enqueue(20);
// // enqueue(30);

// // front();
// // rear();

// // display();
//----------------
