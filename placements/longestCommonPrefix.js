function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return ''
    }

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        prefix = prefix.substring(0, j);

        if (prefix === '') {
            break  // No common prefix, exit loop
        } 
    }

    return prefix;
}

// Example 1
const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1));  // Output: "fl"

// Example 2
const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2));  // Output: ""