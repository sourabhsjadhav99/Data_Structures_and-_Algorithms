function maxLength(arr) {
    let maxLen = 0;
    
    // Function to check if a string has all unique characters
    function hasUniqueCharacters(str) {
        let charSet = new Set();
        for (let char of str) {
            if (charSet.has(char)) {
                return false;
            }
            charSet.add(char);
        }
        return true;
    }
    
    // Backtracking function to generate all subsequences
    function backtrack(index, currentStr) {
        // Check if currentStr is valid (has all unique characters)
        if (hasUniqueCharacters(currentStr)) {
            maxLen = Math.max(maxLen, currentStr.length);
        }
        
        // Explore all subsequences by appending each string in arr
        for (let i = index; i < arr.length; i++) {
            backtrack(i + 1, currentStr + arr[i]);
        }
    }
    
    // Start backtracking from index 0 with an empty string
    backtrack(0, '');
    
    return maxLen;
}

// Example usage:
console.log(maxLength(["un","iq","ue"])); // Output: 4
console.log(maxLength(["cha","r","act","ers"])); // Output: 6
