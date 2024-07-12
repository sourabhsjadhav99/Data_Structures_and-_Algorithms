// function countOccurrences(str, char) {
//     // Write your code here
//     let count = 0;
//     for (const c of str) {
//         if (c === char) {
//             count++;
//         }
//     }
//     return count;
// }

// // Do not modify the below lines
// module.exports = { countOccurrences };


// Approach 2: Rewrite the code without using any loop, and try to implement inbuilt string methods.
// function countOccurrences(str, char) {
//     // Create a regular expression pattern to match the specified character globally
//     const pattern = new RegExp(char, 'g');
//     // Use replace method with the pattern to replace all occurrences of the character with an empty string
//     // Then, calculate the difference in length between the original string and the modified string to get the count of occurrences
//     return str.length - str.replace(pattern, '').length;
// }

function countOccurrences(str, char) {
    // Split the string by the character you want to count
    // Subtracting 1 from the length gives the count of occurrences
    return str.split(char).length-1
}
console.log(countOccurrences( "Elephant", "E"))
// Do not modify the below lines
module.exports = { countOccurrences };