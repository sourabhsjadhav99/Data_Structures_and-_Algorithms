// function findLongestWord(sentence) {
//     // Write your code here
// const words = sentence.split(' ');
// let maxLength = 0;

// for (let i = 0; i < words.length; i++) {
//     const length = words[i].length;
//     if (length > maxLength) {
//         maxLength = length;
//     }
// }

// return maxLength;
// }
// // Do not modify the below lines
// module.exports = { findLongestWord };


// Approach 2: Rewrite the above code using for…of loop.
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;

    for (const word of words) {
        const length = word.length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

let Input= "The quick brown fox jumped over the lazy dog"
console.log(findLongestWord(Input))

// Do not modify the below lines
module.exports = { findLongestWord };