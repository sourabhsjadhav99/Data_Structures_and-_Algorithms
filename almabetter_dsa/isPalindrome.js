// function isPalindrome(str) {
//     // Write your code here
//     const cleanedStr = str.replace(/[^a-z0-9]/g, "");
//     const reversedStr = cleanedStr.split("").reverse().join("");
//     return cleanedStr === reversedStr;
// }

// Corrected code:
function isPalindrome(str) {
    const convertToLowerCase=str.toLowerCase()
    const cleanedStr = convertToLowerCase.replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}
// 1.Added toLowerCase() to convert the input string to lowercase before cleaning it. This ensures that the function is case insensitive when checking for palindromes.

console.log(isPalindrome("RaceCar")); // Output: true
console.log(isPalindrome("Hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("Was it a car or a cat I saw?")); // Output: true