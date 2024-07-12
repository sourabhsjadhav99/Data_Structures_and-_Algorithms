function shortestDistance(wordsDict, word1, word2) {
    let index1 = -1; 
    let index2 = -1; 
    let minDistance = Infinity; 
  
    // Iterate through the array to find indices of word1 and word2
    for (let i = 0; i < wordsDict.length; i++) {
      if (wordsDict[i] === word1) {
        index1 = i; // Update index of word1
      } else if (wordsDict[i] === word2) {
        index2 = i; // Update index of word2
      }
  
      // Calculate the distance if both indices are valid
      if (index1 !== -1 && index2 !== -1) {
        let distance = Math.abs(index1 - index2);
        minDistance = Math.min(minDistance, distance);
      }
    }
  
    return minDistance;
  }
  

//   Approach:
// Initializes index1 and index2 to -1 and minDistance to Infinity.
// Iterates through wordsDict to find the indices of word1 and word2.
// Calculates the distance between the indices of word1 and word2 whenever both indices are valid.

// Space Complexity:
// Uses only a few variables (index1, index2, minDistance, i, and the input array itself).
// Space complexity is O(1), constant space, as the space used does not grow with the input size.

// Time Complexity:
// Iterates through wordsDict once, performing constant-time operations within the loop.
// Time complexity is O(n), where n is the number of elements in wordsDict.

  // Example usage:
  const wordsDict1 = ["practice", "makes", "perfect", "coding", "makes"];
  console.log(shortestDistance(wordsDict1, "coding", "makes")); // Output: 1
  
  const wordsDict2 = ["apple", "banana", "cherry", "apple", "date", "banana", "fig"];
  console.log(shortestDistance(wordsDict2, "apple", "fig")); // Output: 3