function sortNamesByHeight(names, heights) {
    const sortedIndices = [...Array(heights.length).keys()].sort((a, b) => heights[b] - heights[a]);
    return sortedIndices.map(index => names[index]);
}

// Example usage:
console.log(sortNamesByHeight(["Mary", "John", "Emma"], [180, 165, 170]));  // Output: ["Mary", "Emma", "John"]
console.log(sortNamesByHeight(["Alice", "Bob", "Bob"], [155, 185, 150]));   // Output: ["Bob", "Alice", "Bob"]

