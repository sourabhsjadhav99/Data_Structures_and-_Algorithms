var numDecodings = function(s) {
    const n = s.length;
       const dp = new Array(n + 1).fill(0);
       
       dp[0] = 1; // Base case: empty string can be decoded in one way
       dp[1] = s[0] === '0' ? 0 : 1; // If the first digit is '0', it cannot be decoded
       
       for (let i = 2; i <= n; i++) {
           const oneDigit = parseInt(s[i - 1]);
           const twoDigits = parseInt(s.substring(i - 2, i));
           
           if (oneDigit >= 1 && oneDigit <= 9) {
               dp[i] += dp[i - 1]; // Add ways to decode one digit
           }
           
           if (twoDigits >= 10 && twoDigits <= 26) {
               dp[i] += dp[i - 2]; // Add ways to decode two digits
           }
       }
       
       return dp[n];
   };