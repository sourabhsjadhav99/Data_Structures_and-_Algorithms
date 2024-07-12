function decodeString(s) {
    const stack = [];
    let currentStr = "";
    let num = 0;
    
    for (let char of s) {
        if (!isNaN(char)) {
            num = num * 10 + parseInt(char);
        } else if (char === "[") {
            stack.push([currentStr, num]);
            currentStr = "";
            num = 0;
        } else if (char === "]") {
            const [prevStr, repeat] = stack.pop();
            currentStr = prevStr + currentStr.repeat(repeat);
        } else {
            currentStr += char;
        }
    }
    
    return currentStr;
}

// Example usage:
const inputStr1 = "3[a]2[bc]";
const inputStr2 = "3[a2[c]]";

console.log(decodeString(inputStr1));  // Output: "aaabcbc"
console.log(decodeString(inputStr2));  // Output: "accaccacc"
