function lastRemaining(n) {
    let arr = Array.from({ length: n }, (elm, index) => index + 1);
    let leftToRight = true;
  
    while (arr.length > 1) {
      if (leftToRight) {
        arr = arr.filter((elm, index) => index % 2 !== 0);
      } else {
        arr = arr.filter((elm, index) => index % 2 === 0);
      }
      leftToRight = !leftToRight;
    }
  
    return arr[0];
  }
let num = 9
console.log(lastRemaining(9))

console.log(5%4)