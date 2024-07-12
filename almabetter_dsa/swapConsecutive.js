function swapConsecutiveCharacters(str) {
    let arr = str.split("")
    for (i = 0; i < arr.length - 1; i = i + 2) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
    return arr.join("")
}
// Approach:
// Splits the input string into an array of characters.
// Iterates through the array by increments of 2, swapping each pair of consecutive elements.
// Joins the modified array back into a string and returns it.

// Space Complexity:
// Creates a new array to store the characters of the input string.
// Space complexity is O(n), where n is the length of the input string.

// Time Complexity:
// Iterates through the array in a single loop, swapping elements in constant time.
// Time complexity is O(n), where n is the length of the input string.


let input= "AlmaBetters"
// let input = "hello"
console.log(swapConsecutiveCharacters(input))