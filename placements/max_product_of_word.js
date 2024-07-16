function maxProduct(words) {
    const n = words.length;
    const bitmask = new Array(n).fill(0);
    const lengths = new Array(n).fill(0);
    let maxProduct = 0;
    
    // Compute bitmask and length for each word
    for (let i = 0; i < n; i++) {
        const word = words[i];
        let mask = 0;
        for (let char of word) {
            mask |= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0));
        }
        bitmask[i] = mask;
        lengths[i] = word.length;
    }
    
    // Check all pairs of words for max product
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((bitmask[i] & bitmask[j]) === 0) { // No common letters
                maxProduct = Math.max(maxProduct, lengths[i] * lengths[j]);
            }
        }
    }
    
    return maxProduct;
}

// Example 1
const words1 = ["abcw","baz","foo","bar","xtfn","abcdef"];
console.log(maxProduct(words1)); // Output: 16

// Example 2
const words2 = ["a","aa","aaa","aaaa"];
console.log(maxProduct(words2)); // Output: 0
