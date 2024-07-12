function countSquares(rectangles) {
    let maxLen = 0;
    let count = 0;

    // Iterate through rectangles to find maximum side length
    for (const rectangle of rectangles) {
        const [length, width] = rectangle;
        const side = Math.min(length, width);
        if (side > maxLen) {
            maxLen = side;
            count = 1; // Reset count for new maxLen
        } else if (side === maxLen) {
            count++; // Increment count for existing maxLen
        }
    }

    return count;
}

// Example usage:
console.log(countSquares([[5, 8], [3, 9], [5, 12], [16, 5]])); // Output: 3
