function readBinaryWatch(turnedOn) {
    let results = [];
    
    // Iterate over all possible hours (0 to 11) and minutes (0 to 59)
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            // Count the number of '1's in the binary representation of h and m
            let numBits = countBits(h) + countBits(m);
            
            // Check if the total number of '1's equals turnedOn
            if (numBits === turnedOn) {
                // Format the time correctly
                let minuteStr = (m < 10 ? '0' : '') + m; // Ensure two digits for minutes
                results.push(`${h}:${minuteStr}`);
            }
        }
    }
    
    return results;
}

// Helper function to count the number of '1's (turned on LEDs)
function countBits(num) {
    let count = 0;
    while (num > 0) {
        if (num & 1) {
            count++;
        }
        num >>= 1; // Right shift to check the next bit
    }
    return count;
}

// Example usage:
console.log(readBinaryWatch(1)); // Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
console.log(readBinaryWatch(9)); // Output: []
