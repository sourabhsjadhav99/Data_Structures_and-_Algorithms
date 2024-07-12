function minTimeToType(word) {
    let totalTime = 0;
    let currentChar = 'a';

    for (let i = 0; i < word.length; i++) {
        const targetChar = word[i];
        const clockwiseMoves = Math.abs(targetChar.charCodeAt(0) - currentChar.charCodeAt(0));
        const counterclockwiseMoves = 26 - clockwiseMoves;

        totalTime += Math.min(clockwiseMoves, counterclockwiseMoves) + 1;
        currentChar = targetChar;
    }

    return totalTime;
}

// Example usage:
console.log(minTimeToType("abc")); // Output: 5
console.log(minTimeToType("bza")); // Output: 7
