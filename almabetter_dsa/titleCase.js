// function titleCase(sentence) {
//     // write your code here
// const words = sentence.toLowerCase().split(' ');

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
// }

// return words.join(' ');
// }

// // Do not modify the below lines
// module.exports = { titleCase };


// Approach 2: Rewrite the code using map method.
function titleCase(sentence) {
    const words = sentence.toLowerCase().split(' ');

    const titleCaseWords = words.map(word => word[0].toUpperCase() + word.substring(1));

    return titleCaseWords.join(' ');
}

console.log(titleCase("Be yourself; everyone else is already taken."))
// Do not modify the below lines
module.exports = { titleCase };