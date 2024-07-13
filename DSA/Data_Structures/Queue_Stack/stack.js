// class Stack {
//   constructor() {
//       this.items = [];
//   }

//   // Add an element to the top of the stack
//   push(element) {
//       this.items.push(element);
//   }

//   // Remove and return the top element of the stack
//   pop() {
//       if (this.isEmpty()) {
//           return "Stack is empty";
//       }
//       return this.items.pop();
//   }

//   // Return the top element of the stack without removing it
//   peek() {
//       if (this.isEmpty()) {
//           return "Stack is empty";
//       }
//       return this.items[this.items.length - 1];
//   }

//   // Return true if the stack is empty
//   isEmpty() {
//       return this.items.length === 0;
//   }

//   // Return the number of elements in the stack
//   size() {
//       return this.items.length;
//   }

//   // Empty the stack
//   clear() {
//       this.items = [];
//   }

//   // Print the elements of the stack
//   printStack() {
//       console.log(this.items.join(' '));
//   }
// }

// // Example usage:
// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.printStack(); // Output: 10 20 30

// console.log(stack.pop()); // Output: 30
// console.log(stack.peek()); // Output: 20
// stack.printStack(); // Output: 10 20

// console.log(stack.isEmpty()); // Output: false
// stack.clear();
// console.log(stack.isEmpty()); // Output: true

//-------------------------------------------------------------------------------------------
//   stack object 

class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  // Add an element to the top of the stack
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  check(){
    return this.items
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.count - 1];
  }

  // Return true if the stack is empty
  isEmpty() {
    return this.count === 0;
  }

  // Return the number of elements in the stack
  size() {
    return this.count;
  }

  // Empty the stack
  clear() {
    this.items = {};
    this.count = 0;
  }

  // Print the elements of the stack
  printStack() {
    let result = '';
    for (let i = 0; i < this.count; i++) {
      result += this.items[i] + ' ';
    }
    console.log(result.trim());
  }
}

// Example usage:
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.check())
stack.printStack(); // Output: 10 20 30

console.log(stack.pop()); // Output: 30
// console.log(stack.peek()); // Output: 20
// stack.printStack(); // Output: 10 20

// console.log(stack.isEmpty()); // Output: false
// stack.clear();
// console.log(stack.isEmpty()); // Output: true

//-------------------------------------------------------------------------------------------

// let data = [];
// let currentSize = data.length;
// let max = 5;
// function push(newVal) {
//   if (currentSize >= max) {
//     alert("Stack is full you can not add" + newVal);
//   }
//   data[currentSize] = newVal;
//   currentSize += 1;
// }

// function pop() {
//   if (currentSize > 0) {
//     currentSize -= 1;
//     data.length = currentSize;
//   } else {
//     alert("stack is already empty");
//   }
// }

// push(20);
// push(30);
// push(10);
// push(2);
// pop();
// pop();
// pop();
// push(25);
// push(23);
// push(67);
// // pop()
// // pop()

// console.warn(data)
