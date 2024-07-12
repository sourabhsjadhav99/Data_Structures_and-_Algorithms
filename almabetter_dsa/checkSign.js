
function checkSign(num1, num2, num3) {
  let positiveCount = 0;
  let negativeCount = 0;

  if (num1 > 0) positiveCount++;
  if (num2 > 0) positiveCount++;
  if (num3 > 0) positiveCount++;
  if (num1 === 0 || num2 === 0 || num3 === 0) return "Invalid input"

  negativeCount = 3 - positiveCount;

  if (positiveCount === 3) return "+++";
  if (positiveCount === 2) return "++-";
  if (positiveCount === 1) return "+--";
  if (positiveCount === 0) return "---";
}

// Approach:
// Counts the number of positive and negative numbers among three input numbers.
// Determines the sign string based on the counts.

// Space Complexity:
// Uses extra space for the positiveCount and negativeCount variables.
// Space complexity is O(1), constant space.

// Time Complexity:
// Counts positive and negative numbers directly, which takes constant time for each number.
// Time complexity is O(1), constant time, as it always counts the signs of three specific numbers.

console.log(checkSign(0, 40, 10))