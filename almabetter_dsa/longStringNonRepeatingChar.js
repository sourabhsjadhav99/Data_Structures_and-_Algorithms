// function longestSubstringWithoutRepeatingChars(str) {
//     let longest = '';
//     for (let i = 0; i < str.length; i++) {
//       let substring = '';
//       for (let j = i; j < str.length; j++) {
//         if (substring.includes(str[j])) {
//           break;
//         }
//         substring += str[j];
//       }
//       if (substring.length > longest.length) {
//         longest = substring;
//       }
//     }
//     return longest;
//   }

//   console.log(longestSubstringWithoutRepeatingChars("abcdbcbb"));


function longestSubstringWithoutRepeatingChars(str) {
    let longest = '';
    let start = 0;
    let charMap = new Map();
    for (let i = 0; i < str.length; i++) {
        if (charMap.has(str[i])) {
            start = Math.max(start, charMap.get(str[i]) + 1);
        } else {
            charMap.set(str[i], i);// storing index as value
            let substring = str.slice(start, i + 1);
            if (substring.length > longest.length) {
                longest = substring;
            }
        }

    }
    return longest;
}

console.log(longestSubstringWithoutRepeatingChars("abcdebcbb"));