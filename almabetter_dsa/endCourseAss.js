// 1
// function isValidPhoneNumber(phoneNumber) {
//     let regex=/^[789]+[\d]{9}$/
//     return regex.test(phoneNumber)
//   }
//   console.log(isValidPhoneNumber(9234567890))

// 2 
function countVowels(str) {
    let regex = /[aeiou]/gi
 return str.match(regex).length
}
console.log(countVowels("Hello World!"))

// 4 
// function isMultipleOfFive(n) {
//     if(n===5 || n>9){
//         if(n%5===0){
//             return true
//         }else{
//             while(n>9){
//                 let reminder = n%10
//             if(reminder%5===0){
//                 return true
//             }else{
//                 n=parseInt(n/10)
//             }

//             }
//         }
//     }
//     return false
//   }
//   console.log(isMultipleOfFive(108))


// even sum 

// if(n===5 || n>9){
//     if(n%5===0){
//         return true
//     }else{
//         while(n>9){
//             let reminder = n%10
//         if(reminder%5===0){
//             return true
//         }else{
//             n=parseInt(n/10)
//         }

//         }
//     }
// }
// return false

// var countEven = function(num) {
//     let count =0
//     for(let i=2; i<=num; i++){
//         let sum =0
//         let temp=i
//         while(temp>0){
//             let reminder = temp%10
//             sum=sum+reminder
//             temp=parseInt(temp/10)
//         }
//         if(sum%2===0){
//             count++
//         }

//     }
//     return count
// };

// console.log(countEven(4))


// function pushZerosToEnd(arr) {
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===0){
//             arr.splice(i,1)
//             arr.push(0)
//         }
//     }
//     return arr

// }
// console.log(pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]))


// var squareIsWhite = function(coordinates) {

//     let num1 = coordinates.charCodeAt(0)-96
//     let num2 = parseInt(coordinates[1])
//     let result = (num1+num2)%2
//     return result===0? "false":"true"

//   };
//   console.log(squareIsWhite("h4"))


// function findNumberOfTriangles(arr, n){
//     let triangles = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             for (let k = j + 1; k < arr.length; k++) {
//                 if (arr[i] + arr[j] > arr[k] && arr[i] + arr[k] > arr[j] && arr[j] + arr[k] > arr[i]) {
//                     triangles.push([arr[i], arr[j], arr[k]]);
//                 }
//             }
//         }
//     }

//     return triangles.length
// }
// console.log(findNumberOfTriangles([6, 4, 9, 7, 8]))

// function compressVideo(frames) {
//     for(let i=0, j=1; i<frames.length && j<frames.length; i++,j++){
//         if(frames[i]==frames[j]){
//             frames.splice(i,1)
//         }
//     }
//     return frames.length
//   }

//   console.log(compressVideo([2, 1, 2, 2]))\


// function isValidPassword(password) {
//     let regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

//     return regex.test(password)
//   }

//   console.log(isValidPassword("Abc123!@"))

