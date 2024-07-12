class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items.toString());
    }
  }
  
  const stack = new Stack();
  console.log(stack.isEmpty());
  stack.push(20);
  stack.push(10);
  stack.push(30);
  console.log(stack.size());
  stack.print();
  console.log(stack.pop());
  console.log(stack.peek());
  stack.print();

//-------------------------------------------------------------------------------------------
//   stack object 

// class Stack {
//     constructor() {
//       this.items = {};
//       this.head = 0;
//     }
  
//     push(element) {
//       this.items[this.head] = element;
//       this.head++;
//     }
  
//     pop() {
//       const item = this.items[this.head - 1];
//       delete this.items[this.head - 1];
//       this.head--;
//       return item;
//     }
  
//     peek() {
//       return this.items[this.head - 1];
//     }
  
//     size() {
//       return this.head;
//     }
  
//     isEmpty() {
//       return this.head === 0;
//     }
  
//     print() {
//       console.log(this.items);
//     }
//   }

//-------------------------------------------------------------------------------------------

let data = [];
let currentSize = data.length;
let max = 5;
function push(newVal) {
  if (currentSize >= max) {
    alert("Stack is full you can not add" + newVal);
  }
  data[currentSize] = newVal;
  currentSize += 1;
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    alert("stack is already empty");
  }
}

push(20);
push(30);
push(10);
push(2);
pop();
pop();
pop();
push(25);
push(23);
push(67);
// pop()
// pop()

console.warn(data)