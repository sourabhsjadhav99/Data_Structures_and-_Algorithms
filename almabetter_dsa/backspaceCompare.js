function backspaceCompare(s, t) {
    const processString = (str) => {
        const result = [];
        for (const char of str) {
            if (char === '#') {
                result.pop(); // Remove the last character (if exists) for backspace
            } else {
                result.push(char); // Append non-backspace characters
            }
        }
        return result.join(''); // Convert the result array back to a string
    };

    return processString(s) === processString(t);
}

// Example usage:
const s1 = "ab#c";
const t1 = "ad#c";
console.log(backspaceCompare(s1, t1)); // Output: true

const s2 = "ab##";
const t2 = "c#d#";
console.log(backspaceCompare(s2, t2)); // Output: true