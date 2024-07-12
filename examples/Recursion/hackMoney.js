let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function hack(rupees,target)
{
	if(rupees === target){
		return true;
	}
	if(rupees > target){
		return false;
	}

	return hack(rupees*10,target) || hack(rupees*20, target);
}

let n = parseInt(readLine());
while(n--){
	let rupees = 1;
	let target = parseInt(readLine());
	if(hack(rupees, target)){
		console.log("Yes");
	}
	else{
		console.log("No");
	}
}