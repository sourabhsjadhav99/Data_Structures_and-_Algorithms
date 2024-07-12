// function arrayIntersection(array1, array2) {
//     // Create a Set to store unique elements from the first array
//     let set = new Set(array1);
//     // Filter the second array to keep only elements that are in the Set
//     let result = array2.filter(item => set.has(item));
//     // Convert the filtered array to a Set to remove duplicates
//     let resultSet = new Set(result);
//     // Convert the Set back to an array and return it
//     return Array.from(resultSet);
//   }


function arrayIntersection(array1, array2) {
  let countMap = new Map();
  for (let item of array1) {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  }
  let result = [];
  for (let item of array2) {
    if (countMap.get(item) > 0) {
      result.push(item);
      countMap.set(item, countMap.get(item) - 1);
    }
  }
  return result;
}

// Approach:
// The function first creates a Map (countMap) to store the count of occurrences of each element in array1.
// It iterates through array1 to populate countMap with the counts.
// Then, it iterates through array2, checking if each element exists in countMap with a count greater than zero. If yes, it adds the element to the result array and decrements its count in countMap.
// The function returns the result array containing the intersection of array1 and array2.

// Space Complexity:
// Additional space is used for the countMap and the result array.
// Space complexity is O(m + n), where m is the size of array1, n is the size of array2, and the space used by countMap depends on the number of unique elements in array1.

// Time Complexity:
// Creating countMap by iterating through array1 takes O(m) time, where m is the size of array1.
// Checking for intersection and updating result by iterating through array2 takes O(n) time, where n is the size of array2.
// Overall time complexity is O(m + n), which is efficient for most practical cases.

// Example usage:
let array1 = [70, 20, 30, 50]
let array2 = [30, 40, 50, 60, 70];
let intersection = arrayIntersection(array1, array2);
console.log(intersection); // Output: [3, 4]


// function arrayIntersection(array1, array2) {
//   // Convert array1 and array2 to Sets to remove duplicates
//   const set1 = new Set(array1);
//   const set2 = new Set(array2);
  
//   // Initialize an empty array to store the intersection
//   const result = [];
  
//   // Iterate through set1 to check if each element exists in set2
//   for (const item of set1) {
//       if (set2.has(item)) {
//           // If the element exists in both sets, add it to the result array
//           result.push(item);
//       }
//   }
  
//   // Return the result array containing the intersection
//   return result;
// }
