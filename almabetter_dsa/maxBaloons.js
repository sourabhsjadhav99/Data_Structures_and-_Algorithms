function maxNumberOfBalloons(text) {
    const requiredChars = { 'b': 1, 'a': 1, 'l': 2, 'o': 2, 'n': 1 };

    const charCount = {};

    for (const char of text) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let maxInstances = Infinity;
    
    for (const char in requiredChars) {
        const requiredFrequency = requiredChars[char];
        const actualFrequency = charCount[char] || 0;
        const possibleInstances = Math.floor(actualFrequency / requiredFrequency);
        maxInstances = Math.min(maxInstances, possibleInstances);
    }

    return maxInstances;
}

// Example usage:
console.log(maxNumberOfBalloons("nlaebolko")); // Output: 1
console.log(maxNumberOfBalloons("almabetter")); // Output: 0
console.log(maxNumberOfBalloons("loonbalxballpoon")); // Output: 2
