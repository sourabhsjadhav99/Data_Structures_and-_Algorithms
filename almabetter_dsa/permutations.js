// function permute(nums) {
//     const result = [];

//     function backtrack(path, nums) {
//         if (nums.length === 0) {
//             result.push(path);
//             return;
//         }

//         for (let i = 0; i < nums.length; i++) {
//             backtrack([...path, nums[i]], [...nums.slice(0, i), ...nums.slice(i + 1)]);
//         }
//     }

//     backtrack([], nums);
//     return result;
// }

// const nums = [1, 2, 3];
// console.log(permute(nums)); // Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


function permute(nums) {
    const result = [];
  
    function backtrack(currList, remainingNums) {
      if (remainingNums.length === 0) {
        result.push(currList.slice()); // Make a copy of the current permutation
        return;
      }
  
      for (let i = 0; i < remainingNums.length; i++) {
        const num = remainingNums[i];
        currList.push(num); // Add the current number to the permutation
        const remaining = remainingNums.slice(0, i).concat(remainingNums.slice(i + 1)); // Remove the current number from the remaining numbers
        backtrack(currList, remaining); // Recursively generate permutations
        currList.pop(); // Backtrack by removing the current number
      }
    }
  
    backtrack([], nums);
    return result;
  }
  
  const nums = [1, 2, 3];
  const result = permute(nums);
  console.log(result);
  