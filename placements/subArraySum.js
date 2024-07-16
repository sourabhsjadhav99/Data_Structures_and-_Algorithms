function subarraySum(nums, k) {
    let count = 0;
    let sum = 0;
    let prefixSumCount = new Map();
    prefixSumCount.set(0, 1); // To handle subarrays starting from index 0
    
    for (let num of nums) {
        sum += num;
        let requiredSum = sum - k;
        
        if (prefixSumCount.has(requiredSum)) {
            count += prefixSumCount.get(requiredSum);
        }
        
        if (!prefixSumCount.has(sum)) {
            prefixSumCount.set(sum, 0);
        }
        prefixSumCount.set(sum, prefixSumCount.get(sum) + 1);
    }
    
    return count;
}

// Example usage:
console.log(subarraySum([1, 1, 1], 2)); // Output: 2
console.log(subarraySum([1, 2, 3], 3)); // Output: 2
console.log(subarraySum([1, -1, 0], 0)); // Output: 3
