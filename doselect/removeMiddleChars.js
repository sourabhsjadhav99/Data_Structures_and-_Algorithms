function removeMiddleChars(str) {
    const charCount = {};
    // Count the frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let result = str.split('');
    for (let char in charCount) {
        let count = charCount[char];
        // Determine how many characters to remove
        let removeCount = count % 2 === 0 ? 2 : 1;
        if (count > 1) {
            let positions = [];
            // Find positions of the character in the string
            for (let i = 0; i < result.length; i++) {
                if (result[i] === char) positions.push(i);
            }

            // Remove characters from the middle
            let startPos = Math.floor((positions.length - removeCount) / 2);

            for (let i = 0; i < removeCount; i++) {
                result[positions[startPos + i]] = '';
            }
        }
    }

    return result.join('');
}

// Sample Input
let input = 'abcdeabcdedcbaedcba';
// Sample Output
let output = removeMiddleChars(input);
console.log(output); // Expected output: "abcdeedcba"
