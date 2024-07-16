function firstUniqChar(s) {
    const charCount = new Map();

    // First pass: count the frequency of each character
    for (let char of s) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        } else {
            charCount.set(char, 1);
        }
    }

    // Second pass: find the first character with a frequency of 1
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }

    // If no non-repeating character is found
    return -1;
}

// Example 1
const s1 = "almabetter";
console.log(firstUniqChar(s1)); // Output: 1

// Example 2
const s2 = "webalmabetter";
console.log(firstUniqChar(s2)); // Output: 0

// Example 3
const s3 = "aabb";
console.log(firstUniqChar(s3)); // Output: -1
