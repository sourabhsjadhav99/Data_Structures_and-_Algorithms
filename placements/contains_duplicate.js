function containsNearbyDuplicate(nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && Math.abs(i - map.get(nums[i])) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }

    return false;
}

// Example usage:
console.log(containsNearbyDuplicate([1, 2, 2, 1, 3], 3)); // Output: true