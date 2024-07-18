function restoreIpAddresses(s) {
    const results = [];
    
    // Helper function to backtrack and generate IP addresses
    function backtrack(currentParts, start) {
        // Base case: we've formed 4 parts and used all characters in s
        if (currentParts.length === 4 && start === s.length) {
            results.push(currentParts.join('.'));
            return;
        }
        
        // Try placing dots after 1, 2, or 3 characters
        for (let i = 1; i <= 3; i++) {
            if (start + i > s.length) break; // Check boundary
            
            let part = s.substring(start, start + i);
            // Check if part is valid (not exceeding 255 and no leading zeros unless "0")
            if (isValidPart(part)) {
                currentParts.push(part);
                backtrack(currentParts, start + i);
                currentParts.pop(); // Backtrack
            }
        }
    }
    
    // Function to check if a part is a valid IP segment
    function isValidPart(part) {
        if (part.length > 1 && part[0] === '0') return false; // No leading zeros
        let num = parseInt(part);
        return num >= 0 && num <= 255;
    }
    
    // Start backtracking from the beginning of the string
    backtrack([], 0);
    
    return results;
}

// Example usage:
console.log(restoreIpAddresses("25525511135")); 
// Output: ["255.255.11.135","255.255.111.35"]

console.log(restoreIpAddresses("0000"));
// Output: ["0.0.0.0"]

console.log(restoreIpAddresses("101023"));
// Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]