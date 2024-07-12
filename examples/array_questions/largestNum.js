let arr = [9, 23, 8, 73, 56, 24];
let largestNumber = arr.sort((a, b) => `${b}${a}` - `${a}${b}`)
console.log(largestNumber);
