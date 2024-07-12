// let fs = require("fs");
// let data = fs.readFileSync(0, "utf-8");
// let idx = 0;
// data = data.split("\n");

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }
// // reverse String

// // by inbuild reverse method-->
// let given_string=readLine()
// let reversed_string=given_string.split("").reverse().join("")
// console.log(reversed_string)

function reversed_string(arr) {
  let reverse = "";
  for (let char of arr) {
    reverse = char+reverse ;
  }
  return reverse;
}
let arr = "readLine()".split("");
console.log(reversed_string(arr));

