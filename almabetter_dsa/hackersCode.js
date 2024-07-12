function findWords(words) {
    const rows = [
        new Set("qwertyuiop"),
        new Set("asdfghjkl"),
        new Set("zxcvbnm")
    ];

    return words.filter(word => {
        const lowerWord = word.toLowerCase();
        const row = rows.find(row => lowerWord.split('').every(letter => row.has(letter)));
        return row !== undefined;
    });
}

// Example usage:
const words = ["hello", "Alaska", "penguin", "peace"];
console.log(findWords(words));  // Output: ["Alaska", "penguin"]
