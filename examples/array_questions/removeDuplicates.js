
// // remove duplicates
// // M1
// let removeDuplicates = (arr) => {
//   let uniqueArray = [];
//   let repetedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueArray.indexOf(arr[i]) === -1) {
//       uniqueArray.push(arr[i]);
//     } else {
//       repetedArray.push(arr[[i]]);
//     }
//   }
//   return [uniqueArray, repetedArray];
// };
// let arr = readLine().split(" ").map(Number);
// console.log(removeDuplicates(arr)[1]);


// // M2
// let arr = readLine().split(" ").map(Number);
let arr = [1, 2, 3, 4, 2, 3, 5]
let unique = [...new Set(arr)]
// let sum = 0
// for (let i = 0; i < unique.length; i++) {
//   sum = sum + unique[i]
// }
console.log(unique)

// // M3
// let removeDuplicates = (arr) => {
//   let uniqueArray = [];
//   arr.forEach((element) => {
//     if (!uniqueArray.includes(element)) {
//       uniqueArray.push(element);
//     }
//   });
//   return uniqueArray;
// };
// // let arr = readLine().split(" ").map(Number);
// let arr=[2,4,68,12,146,6,49]
// console.log(removeDuplicates(arr));


const removeDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

const array = [1, 2, 2, 6, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray)