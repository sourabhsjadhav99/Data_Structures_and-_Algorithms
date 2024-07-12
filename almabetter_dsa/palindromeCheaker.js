function isPalindrome(num) {
    let reverse = 0


    while (num) {
        let remainder = num % 10
        reverse = reverse * 10 + remainder
        num = parseInt(num / 10)

    }
    // return reverse
    // return num === add ? "wins" : "loses"

}
console.log(isPalindrome(-1330))


// function isPalindrome(num) {
//     let str = String(num)
//     return str===str.split("").reverse().join("")? "wins":"loses"

// }
// console.log(isPalindrome(331))