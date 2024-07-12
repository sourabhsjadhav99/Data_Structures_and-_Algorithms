// var isPowerOfFour = function (n) {
//     if(n<=0){
//         return false
//     }
//     while (n%4===0) {
//             n = n / 4
//     }
//    return n===1 ? true: false

// };
// console.log(isPowerOfFour(6))


var isPowerOfFour = function (n) {
    if (n === 1) {
        return true
    }
    if (n % 4 !== 0 || n==0) {
        return false
    }
    return isPowerOfFour(n/4)
};
console.log(isPowerOfFour(6))




