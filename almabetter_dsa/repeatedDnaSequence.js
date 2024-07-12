function findRepeatedDnaSequences(s) {
    const result = [];
    const substrFreq = new Map();

    for (let i = 0; i <= s.length - 10; i++) {
        const substring = s.substring(i, i + 10);
        substrFreq.set(substring, (substrFreq.get(substring) || 0) + 1);
    }

    for (const [substring, freq] of substrFreq.entries()) {
        if (freq > 1) {
            result.push(substring);
        }
    }

    return result;
}

// Example usage:
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")); // Output: ["AAAAACCCCC","CCCCCAAAAA"]
console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA")); // Output: ["AAAAAAAAAA"]
