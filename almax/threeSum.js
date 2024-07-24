// function threeSum(nums) {
//     nums.sort((a, b) => a - b); // Step 1: Sort the array
//     const result = [];
//     for (let i = 0; i < nums.length - 2; i++) {
//         // Skip duplicate elements
//         if (i > 0 && nums[i] === nums[i - 1]) continue;

//         let left = i + 1;
//         let right = nums.length - 1;

//         while (left < right) {
//             const sum = nums[i] + nums[left] + nums[right];
//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);
//                 // Skip duplicates
//                 while (left < right && nums[left] === nums[left + 1]) left++;
//                 while (left < right && nums[right] === nums[right - 1]) right--;
//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result;
// }
var threeSum = function(nums, target) {
    nums.sort((a, b) => a - b);  // Sort the numbers to make it easier to find triplets
    const n = nums.length;
    let triplets = new Set();  // Use a Set to store unique triplets as strings
    
    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if (sum === target) {
                // Convert the triplet array to a string and add to the Set
                triplets.add([nums[i], nums[left], nums[right]].join(','));
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    // Convert the Set of strings back to an array of arrays of numbers
    return Array.from(triplets).map(str => str.split(',').map(Number));
};