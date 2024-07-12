// 1
// function getTriangleArea(side1, side2, side3) {
//     let s = (side1 + side2 + side3) / 2
//     let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
//     return area

// }
// console.log(getTriangleArea(5,3,4))

// 2
// function capitalizeWords(str) {
//     let arr =str.split(" ")
//     let arr2=[]
//     for(let str of arr){
//         let arr3=[] 
//         for(let i=0;  i<str.length; i++){
//             if(i=0){
//                 arr3.push(arr[0].toUpperCase())
//             }else{
//                 arr3.push(arr[i])
//             }
//         }      
//     }
//     return arr2.join(" ")
//   }
//   console.log(capitalizeWords("hello world"))

// 3
// function addPy(str) {
//     let regex = /^[Py][a-zA-Z]+/
//     if(regex.test(str)){
//         return str
//     }
//     return `Py${str}`
//   }
//   console.log(addPy("thon"))

// 4 
// function string_copies(str,n) {
//     return str.repeat(n)
// }
// console.log(string_copies("hello", 2))

// 5
// function check_a_point(a, b, x, y, r) {

//   let a1 = x+r, b1= y+r
//   if(a<a1 && b<b1){
//     return true
//   }else{
//     return false
//   }

// }

console.log(check_a_point(6,9,4,4,3))

// 7 
// function celsiusToFahrenheit(celsius) {
//     return celsius*9/5 + 32
//   }

// console.log(celsiusToFahrenheit(25))

// 8 
// function fahrenheitToCelsius(fahrenheit) {
//    return  (fahrenheit -32)*5/9
//   }

//   console.log(fahrenheitToCelsius(77))

// 10 
// function lShift(s) {
//     let arr = s.split("")
//     let lastChar = arr.shift()
//     arr.push(lastChar)
//     return arr.join("")
// }
// function rShift(s) {
//     let arr = s.split("")
//     let firstChar = arr.pop()
//     arr.unshift(firstChar)
//     return arr.join("")
// }

// console.log(rShift("a")===lShift("a"))

// let str = "abcdefg"

// console.log(str.substring(2,5))

// var arr = [1, 2, 3, 4, 5];
// for(var i=0; i < arr.length; i++) {
//   if(i === 2){
//   break;
//   }
//   console.log(arr[i]);
// }