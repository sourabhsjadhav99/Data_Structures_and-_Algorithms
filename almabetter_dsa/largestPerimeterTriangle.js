function largestPerimeter(nums) {
    nums.sort((a, b) => b - a); // Sort the lengths in non-increasing order
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2]; // Return the largest achievable perimeter
        }
    }
    return 0; // Return 0 if no valid triangle can be formed
}

// Example usage:
console.log(largestPerimeter([2, 1, 2]));      // Output: 5
console.log(largestPerimeter([1, 2, 1, 10]));  // Output: 0
