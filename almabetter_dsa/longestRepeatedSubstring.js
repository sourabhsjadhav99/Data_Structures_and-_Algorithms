
//--
function longestRepeatedSubstring(str) {
    let longest = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            const substring = str.substring(i, j);   
            const remaining = str.substring(j);

            if (remaining.includes(substring) && substring.length > longest.length) {
                longest = substring;

            }

            console.log("lon--->" +longest)
        }
    }

    return longest;
}

// Example 1
const str1 = "banana";
console.log(longestRepeatedSubstring(str1));  // Output: "ana"

// // Example 2
// const str2 = "mississippi";
// console.log(longestRepeatedSubstring(str2));  // Output: "issi"
