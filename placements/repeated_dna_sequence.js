function findRepeatedDnaSequences(s) {
    const result = [];
    const countMap = new Map();
    
    // Edge case: if s length is less than 10, return empty result
    if (s.length < 10) {
        return result;
    }
    
    // Traverse the string with a sliding window of size 10
    for (let i = 0; i <= s.length - 10; i++) {
        const substr = s.substring(i, i + 10);
        
        // Increase count of current substring in map
        if (!countMap.has(substr)) {
            countMap.set(substr, 1);
        } else {
            countMap.set(substr, countMap.get(substr) + 1);
            // If count becomes 2, this is the second occurrence
            if (countMap.get(substr) === 2) {
                result.push(substr);
            }
        }
    }
    
    return result;
}

// Example 1
const s1 = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
console.log(findRepeatedDnaSequences(s1)); // Output: ["AAAAACCCCC", "CCCCCAAAAA"]

// Example 2
const s2 = "AAAAAAAAAAAAA";
console.log(findRepeatedDnaSequences(s2)); // Output: ["AAAAAAAAAA"]
