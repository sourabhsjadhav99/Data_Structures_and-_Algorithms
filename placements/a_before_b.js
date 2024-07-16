function checkString(s) {
    let seenB = false;
    
    for (let char of s) {
        if (char === 'b') {
            seenB = true;
        } else if (char === 'a' && seenB) {
            return false;
        }
    }
    
    return true;
}

// Example cases:
console.log(checkString("aaabbb")); // Output: true
console.log(checkString("abab"));   // Output: false
console.log(checkString("bbb"));    // Output: true
