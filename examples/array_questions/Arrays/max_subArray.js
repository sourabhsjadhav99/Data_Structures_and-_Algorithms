function maxSubArray(nums) {
    if (nums.length === 0) {
        return 0; 
    }

    let maxSum = nums[0]; 
    let currentSum = nums[0]; 

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum; 
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(nums);
console.log("Maximum Subarray Sum:", result);
//-------------------------------------------------------------------------
// function maxSubArray(nums) {
//     if (nums.length === 0) {
//         return { maxSum: 0, subarray: [] }; // If the array is empty, maximum sum is 0
//     }

//     let maxSum = nums[0];
//     let currentSum = nums[0];
//     let start = 0; // Start index of the current subarray
//     let end = 0; // End index of the current subarray
//     let tempStart = 0; // Temporary start index for updating

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > currentSum + nums[i]) {
//             currentSum = nums[i];
//             tempStart = i;
//         } else {
//             currentSum = currentSum + nums[i];
//         }

//         if (currentSum > maxSum) {
//             maxSum = currentSum;
//             start = tempStart;
//             end = i;
//         }
//     }

//     const subarray = nums.slice(start, end + 1);
//     return { maxSum, subarray };
// }

// // Example usage:
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const result = maxSubArray(nums);
// console.log("Maximum Subarray Sum:", result.maxSum);
// console.log("Maximum Subarray:", result.subarray);
