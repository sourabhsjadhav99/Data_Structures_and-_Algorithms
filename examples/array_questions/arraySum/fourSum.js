// function fourSum(nums, target) {
//     nums.sort((a, b) => a - b);  // Step 1: Sort the array
//     const result = [];
//     const n = nums.length;

//     for (let i = 0; i < n - 3; i++) {  // First pointer
//         if (i > 0 && nums[i] === nums[i - 1]) continue;  // Skip duplicates
//         for (let j = i + 1; j < n - 2; j++) {  // Second pointer
//             if (j > i + 1 && nums[j] === nums[j - 1]) continue;  // Skip duplicates
//             let left = j + 1;  // Third pointer
//             let right = n - 1;  // Fourth pointer

//             while (left < right) {
//                 const sum = nums[i] + nums[j] + nums[left] + nums[right];
//                 if (sum === target) {
//                     result.push([nums[i], nums[j], nums[left], nums[right]]);
//                     while (left < right && nums[left] === nums[left + 1]) left++;  // Skip duplicates
//                     while (left < right && nums[right] === nums[right - 1]) right--;  // Skip duplicates
//                     left++;
//                     right--;
//                 } else if (sum < target) {
//                     left++;
//                 } else {
//                     right--;
//                 }
//             }
//         }
//     }

//     return result;
// }

// // Example usage:
// const nums = [1, 0, -1, 0, -2, 2];
// const target = 0;
// console.log(fourSum(nums, target));

function fourSum(nums, target) {
    nums.sort((a, b) => a - b);  // Step 1: Sort the array
    const result = new Set();
    const n = nums.length;

    for (let i = 0; i < n - 3; i++) {  // First pointer
        for (let j = i + 1; j < n - 2; j++) {  // Second pointer
            let left = j + 1;  // Third pointer
            let right = n - 1;  // Fourth pointer

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    result.add([nums[i], nums[j], nums[left], nums[right]].join(','));
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

    return Array.from(result).map(elm=>elm.split(",").map(Number))
}

// Example usage:
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
console.log(fourSum(nums, target));