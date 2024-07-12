var isMatch = function(s, p) {
    const dp = Array(s.length + 1).fill(false).map(() => Array(p.length + 1).fill(false));
     dp[0][0] = true;
 
     // Pre-process pattern to handle '*' cases
     for (let j = 1; j <= p.length; j++) {
         if (p[j - 1] === '*') {
             dp[0][j] = dp[0][j - 2];
         }
     }
 
     // Dynamic programming
     for (let i = 1; i <= s.length; i++) {
         for (let j = 1; j <= p.length; j++) {
             if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                 dp[i][j] = dp[i - 1][j - 1];
             } else if (p[j - 1] === '*') {
                 dp[i][j] = dp[i][j - 2]; // Zero occurrences of the preceding element
                 if (p[j - 2] === '.' || s[i - 1] === p[j - 2]) {
                     dp[i][j] = dp[i][j] || dp[i - 1][j]; // One or more occurrences of the preceding element
                 }
             }
         }
     }
 
     return dp[s.length][p.length];
 };
 // Example usage:
console.log(isMatch("aa", "a"));    // Output: false
console.log(isMatch("aa", "a*"));   // Output: true
console.log(isMatch("ab", ".*"));   // Output: true