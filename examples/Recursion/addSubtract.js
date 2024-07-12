let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function addSubtract(n,i,target,arr,currSum){
    if(currSum === target && i===n){
        return 1;
    }
    if(i>=n){
        return 0;
    }
    return (addSubtract(n,i+1,target,arr,currSum+arr[i])
    +addSubtract(n,i+1,target,arr,currSum-arr[i])
    +addSubtract(n,i+1,target,arr,currSum));
}
let target = parseInt(readLine());
let n = parseInt(readLine());
let arr = readLine().split(" ").map(Number)
console.log(addSubtract(n,0, target,arr,0));