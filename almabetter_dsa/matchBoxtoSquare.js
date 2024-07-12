function canMakeSquare(matchsticks) {
    const totalLength = matchsticks.reduce((sum, length) => sum + length, 0);
    if (totalLength % 4 !== 0) return false; // If the total length is not divisible by 4, cannot form a square

    const targetLength = totalLength / 4;
    const sides = new Array(4).fill(0);

    const backtrack = (index) => {
        if (index === matchsticks.length) {
            return sides.every(side => side === targetLength); // Check if all sides are equal to targetLength
        }

        for (let i = 0; i < 4; i++) {
            if (sides[i] + matchsticks[index] <= targetLength) {
                sides[i] += matchsticks[index]; // Add the matchstick to the current side
                if (backtrack(index + 1)) return true; // Recursively check the next matchstick
                sides[i] -= matchsticks[index]; // Backtrack: remove the matchstick from the current side
            }
        }

        return false; // No valid arrangement found for the current matchstick
    };

    return backtrack(0);
}

// Example usage:
console.log(canMakeSquare([1, 1, 2, 2, 2])); // Output: true
console.log(canMakeSquare([3, 3, 3, 3, 4])); // Output: false
