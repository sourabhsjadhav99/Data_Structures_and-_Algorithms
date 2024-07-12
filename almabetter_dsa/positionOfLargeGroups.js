var largeGroupPositions = function (s) {
    const result = [];
    let start = 0;

    for (let i = 1; i <= s.length; i++) {
        // Check if the current character is different from the previous one or if it's the last character
        if (s[i] !== s[i - 1] || i === s.length) {
            // Check if the group is large (3 or more characters)
            if (i - start >= 3) {
                result.push([start, i - 1]); // Record the interval of the large group
            }
            start = i; // Update the start index for the next potential group
        }
    }

    return result;

};
let s = "abcdddeeeeaabbbcd"
console.log(largeGroupPositions(s))