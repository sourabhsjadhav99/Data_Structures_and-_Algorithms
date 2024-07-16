
function reverseString(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {

        reversedString = reversedString + str[i];

    }
    return reversedString;
}


// const str = "Hello, World!";
// console.log(reverseString(str));

// let str = "welcome to 10x"
// // emoclew ot x01
// let arr = str.split(" ")
// let arr2 = ""
// for (let i = 0; i < arr.length; i++) {
//     if (i == arr.length - 1) {
//         arr2 = arr2 + arr[i].split("").reverse().join("")
//     } else {
//         arr2 = arr2 + arr[i].split("").reverse().join("") + " "
//     }

// }
// console.log(`${arr2}`)

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
  
  