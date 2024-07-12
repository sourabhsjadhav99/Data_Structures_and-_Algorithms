// function signOfProduct(nums) {
//     let product = 1; // Initialize product to 1

//     // Calculate the product of all integers in the array
//     for (const num of nums) {
//         product *= num;
//     }

//     // Determine the sign based on the product value
//     if (product > 0) {
//         return 1; // Positive product
//     } else if (product < 0) {
//         return -1; // Negative product
//     } else {
//         return 0; // Product is zero
//     }
// }


function signOfProduct(nums) {
    let negativeCount = 0;

    for (const num of nums) {
        if (num < 0) {
            negativeCount++;
        } else if (num === 0) {
            return 0; // If there's a zero, product will be zero
        }
    }

    // Determine the sign based on the count of negative numbers
    return negativeCount % 2 === 0 ? 1 : -1;
}

// Approach:
// Counts the number of negative numbers in the array.
// Determines the sign based on the count of negative numbers.

// Space Complexity:
// Only uses extra space for the negativeCount variable.
// Space complexity is O(1), constant space.

// Time Complexity:
// Counts negative numbers and checks for zero while iterating through the array once.
// Time complexity is O(n), where n is the number of integers in the array.

// Example usage
console.log(signOfProduct([2, -3, 5, 4])); // Output: -1
console.log(signOfProduct([1, 2, 0])); // Output: 0