function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let quadruplets = new Set();
    
    for (let i = 0; i < n - 3; i++) {
        for (let j = i + 1; j < n - 2; j++) {
            let left = j + 1;
            let right = n - 1;
            
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                
                if (sum === target) {
                    quadruplets.add([nums[i], nums[j], nums[left], nums[right]].join(','));
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    return Array.from(quadruplets).map(str => str.split(',').map(Number));
}

// Example usage:
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
