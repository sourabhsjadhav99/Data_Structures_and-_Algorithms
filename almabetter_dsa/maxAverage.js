// const findMaxAverage = function (nums, k) {
//     let maxSum = 0

//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0
//         for (let j = i; j < k + i; j++) {
//             sum = sum +nums[j]
//         }
//         maxSum = Math.max(maxSum, sum)
//     }
//   return maxSum/k

// };

// let nums = [1, 12, -5, -6, 50, 3], k = 4
// console.log(findMaxAverage(nums, k))

const findMaxAverage = function (nums, k) {
    let maxSum = 0;

    for (let i = 0; i <= nums.length-k ; i++) {
        let sum = 0;
        for (let j = i; j < k + i; j++) {
            sum += nums[j];
        }
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k; // Divide by k, not 4
};

let nums = [1, 12, -5, -6, 50, 3];
let k = 4;
console.log(findMaxAverage(nums, k)); // Output: 21.25