function generateParentheses(n) {
    const result = [];

    function backtrack(currStr, open, close) {
        if (open > n || close > n || close > open) return;
        if (currStr.length === n * 2 && open === close) {
            result.push(currStr);
            return;
        }

        if (open < n) {
            backtrack(currStr + '(', open + 1, close);
        }
        if (close < open) {
            backtrack(currStr + ')', open, close + 1);
        }
    }

    backtrack('', 0, 0);
    return result;
}

// Example usage:
const n1 = 3;
console.log(generateParentheses(4)); // Output: ["((()))","(()())","(())()","()(())","()()()"]

const n2 = 1;
console.log(generateParentheses(n2)); // Output: ["()"]
