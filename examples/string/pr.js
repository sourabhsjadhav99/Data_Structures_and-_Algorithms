// let s = "ssj";
// console.log(minCharsToMakePalindrome(s))

// function minCharsToMakePalindrome(s) {

//     let subfunction = (s, i, j) => {

//         if (i === j) {
//             return 0
//         }
//         if (j - i === 1) {
//             return s[i] === s[j] ? 0 : 1
//         }
//         if (s[i] === s[j]) {
//             return subfunction(s, i + 1, j - 1)
//         } else {
//             return Math.min(subfunction(s, i + 1, j), subfunction(s, i, j - 1)) + 1
//         }

//     }

//     return subfunction(s, 0, s.length - 1)
// }

// let arr = [1, 2, 3, 8, 9, 4]

// function addition(arr) {
//     i = 0;
//     j = arr.length - 1
//     let add = 0
//     while (i < arr.length && j >= 0) {
//         add = add + arr[i] * 10 ** j
//         j--
//         i++

//     }
//     add = add + 1
//     let arr2 = add.toString().split("").map(Number)
//     return arr2
// }
// console.log(addition(arr))