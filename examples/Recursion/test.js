let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function seriesSum(calculated, current, num) {
  let i; cur = 1;
  if (current == num + 1) {
    return 0;
  }else{
  for ( i = calculated; i < calculated + current; i++) {
    cur = cur*i;      
  }
  return cur + seriesSum(i, current + 1, num);

}
}
let testcases=parseInt(readLine());
for(let i=0;i<testcases; i++){
    let num = parseInt(readLine());
   console.log(seriesSum(1, 1, num));
}
//--------------------------------------------------------------------
// function sum(arr, n) {
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
// }
// let array = readLine().split("").map(Number);
// let n = array.length;
// console.log(sum(array, n));
