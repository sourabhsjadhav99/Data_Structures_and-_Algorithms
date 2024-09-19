
// const findCombinations = (arr, targetSum) => {
//   const combinations = [];
//   const uniqueCombinations = new Set();

//   const backtrack = (currIndex, currSum, currCombo) => {
//       if (currSum === targetSum) {
//           // Convert array to string to use in a set to ensure uniqueness
//           const key = currCombo.sort((a, b) => a - b).join(',');
//           if (!uniqueCombinations.has(key)) {
//               uniqueCombinations.add(key);
//               combinations.push(currCombo);
//           }
//           return;
//       }

//       if (currIndex === arr.length || currSum > targetSum) {
//           return;
//       }

//       // Include the current number in the combination
//       backtrack(currIndex + 1, currSum + arr[currIndex], [...currCombo, arr[currIndex]]);

//       // Exclude the current number from the combination
//       backtrack(currIndex + 1, currSum, currCombo);
//   };

//   backtrack(0, 0, []);
//   return combinations;
// };

// // Example usage
// const arr = [1, 2, 3, 4];
// const targetSum = 5;
// const result = findCombinations(arr, targetSum);
// console.log(result); // Output: [[1, 4], [2, 3]]

function findCombinations (arr, targetSum) {
  const combinations = [];

  function backtrack (startIndex, currSum, currCombo) {
      if (currSum === targetSum) {
          combinations.push([...currCombo]);
          return;
      }

      if (currSum > targetSum) {
          return;
      }

      for (let i = startIndex; i < arr.length; i++) {
          // Include the number and recurse
          currCombo.push(arr[i]);
          backtrack(i, currSum + arr[i], currCombo);
          // Backtrack, remove the number
          currCombo.pop();
      }
  };

  backtrack(0, 0, []);
  return combinations.length;
};

// Example usage
const arr = [1, 2, 3];
const targetSum = 4;
const result = findCombinations(arr, targetSum);
console.log(result); // Output: [[1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2]]
