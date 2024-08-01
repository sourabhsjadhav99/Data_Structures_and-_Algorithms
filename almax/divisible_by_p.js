function minSubarray(nums, p) {
    const n = nums.length;
    let totalSum = nums.reduce((sum, num) => sum + num, 0);
    let targetMod = totalSum % p;
    
    if (targetMod === 0) {
        return 0; // Entire array is already divisible by p
    }
    
    let modIndex = new Map();
    modIndex.set(0, -1); // To handle subarrays starting from index 0
    let currentSum = 0;
    let minLength = n; // Initialize with max possible value
    
    for (let i = 0; i < n; i++) {
        currentSum += nums[i];
        let currentMod = currentSum % p;
        
        let neededMod = (currentMod - targetMod + p) % p;
        if (modIndex.has(neededMod)) {
            let subarrayLength = i - modIndex.get(neededMod);
            minLength = Math.min(minLength, subarrayLength);
        }
        
        modIndex.set(currentMod, i);
    }
    
    return minLength === n ? -1 : minLength;
}

// Example usage:
console.log(minSubarray([3, 1, 4, 2], 6)); // Output: 1
console.log(minSubarray([6, 3, 5, 2], 9)); // Output: 2
console.log(minSubarray([1, 2, 3], 3)); // Output: 0
