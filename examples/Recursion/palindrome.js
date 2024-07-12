let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function pallindrome(string,start,end){
  if(start >= end){
	  return"True";
  }else{
    if(string[start] != string[end]){
      return "False";
    }else{
      return pallindrome(string,start+1,end-1);
    }
  }

  
 
}

let t =parseInt(readLine());
while(t--){
	let string = readLine();
	console.log(pallindrome(string,0,string.length-1));
}