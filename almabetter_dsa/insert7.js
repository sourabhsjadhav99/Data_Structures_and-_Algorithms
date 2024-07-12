function insert7(inputString) {
    let result = '';
    let count = 0;

    for (const char of inputString) {
        if (char !== ' ') {
            // Increment count only for non-space characters
            count++;
            result += char;

            // Insert "7" after every set of 6 characters
            if (count % 6 === 0) {
                result += '7';
            }
        } else {
            // Keep spaces unchanged
            result += char;
        }
    }
    return result;
}

// Approach:
// Initializes an empty string result to store the modified string.
// Initializes a counter count to keep track of non-space characters.
// Iterates through each character in the input string.
// If the character is not a space, it increments count, adds the character to result, and checks if count is a multiple of 6. If so, it inserts a "7" after the set of 6 characters.
// If the character is a space, it simply adds it to result.
// Returns the modified result string.

// Space Complexity:
// Creates an additional string (result) to store the modified string.
// Space complexity is O(n), where n is the length of the input string.

// Time Complexity:
// Iterates through each character in the input string once.
// Time complexity is O(n), where n is the length of the input string.

// Example usage
console.log(insert7("Hello World and Universe!")); // Output: "Hello W7orld an7d Unive7rse!"
console.log(insert7("Full Stack Web Development")); // Output: "Full St7ack Web7 Develo7pment"
