
function subarraySum(nums, k) {
    let count = 0;
    let current_sum = 0;
    const sum_counts = new Map();

    // Initialize the map with the base case for subarrays starting from index 0
    sum_counts.set(0, 1);

    for (let num of nums) {
        current_sum += num;  // Update the cumulative sum        
        // Check if there's a subarray (with sum k) ending at the current index
        if (sum_counts.has(current_sum - k)) {
            count += sum_counts.get(current_sum - k);
        }
        // Update the hashmap with the current cumulative sum
        sum_counts.set(current_sum, (sum_counts.get(current_sum) || 0) + 1);
    }
    return count;
}
// Example usage:
console.log(subarraySum([1, 1, 1], 2)); // Output: 2
console.log(subarraySum([1, 2, 3], 3)); // Output: 2
console.log(subarraySum([1, -1, 0], 0)); // Output: 3
