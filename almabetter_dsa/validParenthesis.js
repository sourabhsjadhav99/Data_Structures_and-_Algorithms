function isBalanced(expression) {
    const stack = [];

    // Define a map for matching opening and closing brackets
    const bracketPairs = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    for (let char of expression) {
        // If the character is an opening bracket, push it onto the stack
        if (bracketPairs[char]) {
            stack.push(char);
        }
        // If the character is a closing bracket
        else if (char === '}' || char === ']' || char === ')') {
            // Pop the top element from the stack
            const topBracket = stack.pop();
            // Check if the popped opening bracket matches the current closing bracket
            if (!topBracket || bracketPairs[topBracket] !== char) {
                return false; // Mismatched brackets
            }
        }
    }

    // Check if there are any remaining brackets in the stack
    return stack.length === 0;
}

// Example usage:
const expression1 = '{([])}';
const expression2 = '[(])';

console.log(isBalanced(expression1) ? 'balanced' : 'not balanced'); // Output: balanced
console.log(isBalanced(expression2) ? 'balanced' : 'not balanced'); // Output: not balanced
