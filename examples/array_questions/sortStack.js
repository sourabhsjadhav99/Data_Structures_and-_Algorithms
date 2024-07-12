let stack = [5, 3, 7, 1, 8, 2]; // original stack
let sortedStack = []; // sorted stack

while (stack.length > 0) {
  let temp = stack.pop();

  while (sortedStack.length > 0 && sortedStack[sortedStack.length - 1] > temp) {
    stack.push(sortedStack.pop());
  }

  sortedStack.push(temp);
}

console.log(sortedStack);