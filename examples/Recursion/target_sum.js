let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function targetSum(currSum,index,arr,target)
{
	if(currSum === target){
		return 1;
	}
	if(currSum > target){
		return 0;
	}

	let  count = 0;
	for(let i = index; i < arr.length; i++){
		count += targetSum(currSum+arr[i],i,arr,target);
	}
	return count;
}

let inputs = readLine().split(" ");
let n = parseInt(inputs[0]);
let target = parseInt(inputs[1]);
let arr = readLine().split(" ");
for(let i=0; i<n; i++){
	arr[i] = parseInt(arr[i]);
}

console.log(targetSum(0,0,arr,target));

    
function seriesSum(calculated,
	current, N)
{
let i, cur = 1;

// checking termination condition
if (current == N + 1)
return 0;

// product of terms till current
for (i = calculated; i < calculated +
		   current; i++)
cur *= i;

// recursive call for adding
// terms next in the series
return cur + seriesSum(i, current + 1, N);
}