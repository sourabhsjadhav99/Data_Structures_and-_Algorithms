function oddString(words) {
    const getDifferenceArray = (word) => {
        const difference = [];
        for (let i = 1; i < word.length; i++) {
            difference.push(word.charCodeAt(i) - word.charCodeAt(i - 1));
        }
        return difference;
    };

    const differenceMap = new Map();

    // Calculate difference arrays and count frequencies
    for (const word of words) {
        const differenceArray = getDifferenceArray(word);
        const key = differenceArray.toString();
        differenceMap.set(key, (differenceMap.get(key) || 0) + 1);
    }

    // Find the difference array occurring only once
    for (const [key, value] of differenceMap.entries()) {
        if (value === 1) {
            const oddDifferenceArray = key.split(',').map(Number);
            for (const word of words) {
                if (oddDifferenceArray.toString() === getDifferenceArray(word).toString()) {
                    return word;
                }
            }
        }
    }

    return null; // No odd string found
}

// Example usage:
console.log(oddString(["adc", "wzy", "abc"])); // Output: "abc"
