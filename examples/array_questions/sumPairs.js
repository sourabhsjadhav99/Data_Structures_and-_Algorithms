const arr = [1, 2, 3, 4, 5];
const targetSum = 7;
const pairs = [];

// Find all pairs that add up to the target sum
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === targetSum) {
//       pairs.push([arr[i], arr[j]]);
//     }
//   }
// }
// console.log(pairs);  


// Find all combinations of numbers that add up to the target sum
const combinations = [];

function findCombinations(currIndex, currSum, currCombo) {
  if (currSum === targetSum) {
    combinations.push(currCombo);
    return;
  }

  if (currIndex === arr.length || currSum > targetSum) {
    return;
  }

  // Include the current number in the combination
  findCombinations(currIndex + 1, currSum + arr[currIndex], [...currCombo, arr[currIndex]]);

  // Exclude the current number from the combination
  findCombinations(currIndex + 1, currSum, currCombo);
}

findCombinations(0, 0, []);

 // Output: [[2, 5], [3, 4]]
console.log(combinations); // Output: [[1, 2, 4], [1, 3, 3], [2, 3, 2], [4, 3]]
