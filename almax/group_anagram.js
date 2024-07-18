function groupAnagrams(strs) {
    const anagrams = {};

    for (let str of strs) {
        // Sort the string
        const sortedStr = str.split('').sort().join('');
        
        // Use the sorted string as the key
        if (!anagrams[sortedStr]) {
            anagrams[sortedStr] = [];
        }
        
        // Append the original string to the list
        anagrams[sortedStr].push(str);
    }

    // Return the values of the dictionary as an array
    return Object.values(anagrams);
}

// Example cases:
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); 
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams([""])); 
// Output: [[""]]

console.log(groupAnagrams(["a"])); 
// Output: [["a"]]
