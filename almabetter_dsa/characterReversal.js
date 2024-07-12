function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join the characters back into a string
    return str.split('').reverse().join('');
}

// Approach:
// Uses the split('') method to convert the input string str into an array of characters.
// Uses the reverse() method to reverse the order of elements in the array.
// Uses the join('') method to join the reversed array elements back into a string.

// Space Complexity:
// Requires extra space for the array created by split('').
// Space complexity is O(n), where n is the length of the input string str.

// Time Complexity:
// The split('') method takes O(n) time, where n is the length of the input string.
// The reverse() method operates in-place and takes O(n/2) time to reverse the array.
// The join('') method takes O(n) time to join the reversed array elements back into a string.
// Overall time complexity is O(n) due to the dominant operation being the split('') method.

// Example usage
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
console.log(reverseString("AlmaBetter University")); //