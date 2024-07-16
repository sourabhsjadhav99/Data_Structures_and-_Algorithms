function numDecodings(s) {
    const n = s.length;
    if (n === 0) return 0;
    
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] !== '0' ? 1 : 0;
    
    for (let i = 2; i <= n; i++) {
        let oneDigit = parseInt(s.substring(i - 1, i));
        let twoDigits = parseInt(s.substring(i - 2, i));
        
        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1];
        }
        
        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    
    return dp[n];
}

// Example cases
console.log(numDecodings("12")); // Output: 2
console.log(numDecodings("226")); // Output: 3
console.log(numDecodings("06")); // Output: 0
