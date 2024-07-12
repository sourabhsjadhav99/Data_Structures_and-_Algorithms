const findMaxAverage = function(nums, k) {
    let maxSum = 0;

    for (let i = 0; i <= nums.length-k ; i++) {
        let sum = 0;
        for (let j = i; j < k + i; j++) {
            sum += nums[j];
        }
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k; 
};