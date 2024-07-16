function removeDuplicateLetters(s) {
    const freq = new Map();
    const stack = [];
    const inStack = new Set();

    // Count the frequency of each character in the string
    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    for (const char of s) {
        // Decrease the frequency of the current character
        freq.set(char, freq.get(char) - 1);

        // If the character is already in the stack, continue to the next character
        if (inStack.has(char)) continue;

        // Remove characters that are greater than the current character and can appear later
        while (stack.length > 0 && stack[stack.length - 1] > char && freq.get(stack[stack.length - 1]) > 0) {
            inStack.delete(stack.pop());
        }

        // Add the current character to the stack and the set
        stack.push(char);
        inStack.add(char);
    }

    return stack.join('');
}

// Example 1
const s1 = "bcabc";
console.log(removeDuplicateLetters(s1)); // Output: "abc"

// Example 2
const s2 = "cbacdcbc";
console.log(removeDuplicateLetters(s2)); // Output: "acdb"
