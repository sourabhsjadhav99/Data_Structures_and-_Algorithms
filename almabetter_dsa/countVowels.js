// function countVowels(str) {
//     // Write your code here
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const lowerStr = str.toLowerCase();
//     let count = 0;

//     for (let i = 0; i <= lowerStr.length; i++) {
//         if (vowels.includes(lowerStr[i])) {
//             count++;
//         }
//     }
//     return count;
// }

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) { // Changed <= to <
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}


// function countVowels(str) {
//     let regex = /[aeiou]/gi
//   return str.match(regex).length
//  }


// Changed the loop condition from <= to < to ensure that the loop runs until the last character of the string (lowerStr.length - 1) without going beyond it.

console.log(countVowels("AlmaBetter")); // Output: 4
console.log(countVowels("Coding is fun with fellow learners")); // Output: 10
console.log(countVowels("Hello World")); // Output: 3


