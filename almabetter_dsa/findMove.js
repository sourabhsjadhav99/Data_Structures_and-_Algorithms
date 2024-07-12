function findMove(str) {
    let moves = [];

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === '+' && str[i + 1] === '+') {
            let newState = str.substring(0, i) + '--' + str.substring(i + 2);
            moves.push(newState);
        }
    }

    return moves;
}

//   Approach:
// Initializes an empty array moves to store the possible moves.
// Iterates through the input string str up to the second-to-last character.
// Checks if the current character and the next character are both '+'. If so, it creates a new string by replacing the two consecutive '+' with '--' at that position.
// Adds the new state to the moves array.
// Returns the array of possible moves.

// Space Complexity:
// The function uses additional space for the moves array to store the possible moves.
// The space complexity is directly proportional to the number of possible moves generated, which depends on the input string str.

// Time Complexity:
// The function iterates through the input string str once, checking pairs of adjacent characters.
// Time complexity is O(n), where n is the length of the input string str. This is because the loop runs proportional to the length of the string.

// Test cases
console.log(findMove("++++")); // Output: ["--++", "+--+", "++--"]
console.log(findMove("++-++")); // Output: ["---++", "++---"]
console.log(findMove("+-+-")); // Output: []
