function canConstruct(ransomNote, magazine) {
    // Create a map to count the frequency of each character in the magazine
    let magazineMap = new Map();
    
    for (let char of magazine) {
        if (magazineMap.has(char)) {
            magazineMap.set(char, magazineMap.get(char) + 1);
        } else {
            magazineMap.set(char, 1);
        }
    }
    
    // Check if the ransom note can be constructed from the magazine
    for (let char of ransomNote) {
        if (magazineMap.has(char) && magazineMap.get(char) > 0) {
            magazineMap.set(char, magazineMap.get(char) - 1);
        } else {
            return false;
        }
    }
    
    return true;
}

// Example usage:
console.log(canConstruct("a", "b"));       // Output: false
console.log(canConstruct("aa", "ab"));     // Output: false
console.log(canConstruct("aa", "aab"));    // Output: true
