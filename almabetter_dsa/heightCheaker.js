var heightChecker = function(heights) {
    let expected = [...heights].sort((a, b) => a - b); // Create a sorted copy of heights
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            count++;
        }
    }
    return count;
};

// Example usage:
console.log(heightChecker([1, 1, 4, 2, 1, 3]));  // Output: 3
console.log(heightChecker([5, 1, 2, 3, 4]));     // Output: 5
console.log(heightChecker([1, 2, 3, 4, 5]));     // Output: 0
