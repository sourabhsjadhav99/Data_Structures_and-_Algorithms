function combinationSum(arr, target) {
    let result = [];
    let curr = [];
    
    function backtrack(start, sum) {
      if (sum === target) {
        result.push([...curr]);
      } else if (sum < target) {
        for (let i = start; i < arr.length; i++) {
          curr.push(arr[i]);
          backtrack(i, sum + arr[i]);
          curr.pop();
        }
      }
    }
    
    backtrack(0, 0);
    
    return result;
  }
  
  let arr = [1, 2, 3, 4];
  let target = 5;
  let output = combinationSum(arr, target);
  
  console.log(output);
  // Output: [[1,1,1,1],[1,1,2],[2,2]]
  //--------------------------------------------------------------------------------------------------------
//   function combinations(arr, r) {
//     let result = [];
    
//     function generateCombos(start, combo) {
//       if (combo.length === r) {
//         result.push([...combo]);
//         return;
//       }
      
//       for (let i = start; i < arr.length; i++) {
//         combo.push(arr[i]);
//         generateCombos(i + 1, combo);
//         combo.pop();
//       }
//     }
    
//     generateCombos(0, []);
//     return result;
//   }
//   const arr = [1, 2, 3, 4];
// const r = 2;
// console.log(combinations(arr, r)); // Output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
