let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// function even_odd_seprator(n){
 
//     if(n%2==0){
//        even.push(n)
//     }else{
//       odd.push(n)
//     }


// }
// let odd=[]
// let even=[]
// let arr=readLine().split(",")
// for (let i=0; i<arr.length; i++){
//     even_odd_seprator(parseInt(arr[i]))
// }
// let array=[...odd,...even]
// console.log(array);

function evenOddSeparator(arr){
  let odd=[];
  let even=[]
  for (let i=0; i<arr.length; i++){
    if(arr[i]%2===0){
      even.push(arr[i])
    }else{
      odd.push(arr[i])
    }
  }
  return odd.concat(even)
}
function ConvertToNumber(list){
  for(let each in list){
      list[each]=Number(list[each]);
  }
  
}
let numbers =readLine().split(" ");
ConvertToNumber(numbers);
let separated = evenOddSeparator(numbers);
for(num of separated){
  console.log(num);
}
