function countSegments(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        // If current character is not a space and either it's the first character or the previous character was a space
        if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) {
            count++;
        }
    }
    
    return count;
}

// Example 1
const s1 = "Hello, my name is John";
console.log(countSegments(s1)); // Output: 5

// Example 2
const s2 = "Hello";
console.log(countSegments(s2)); // Output: 1
