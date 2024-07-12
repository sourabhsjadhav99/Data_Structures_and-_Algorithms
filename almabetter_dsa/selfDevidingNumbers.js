function selfDividingNumbers(left, right) {
    const result = [];
    
    for (let num = left; num <= right; num++) {
        if (isSelfDividing(num)) {
            result.push(num);
        }
    }
    
    return result;
}

function isSelfDividing(num) {
    let temp = num;
    while (temp > 0) {
        const digit = temp % 10;
        if (digit === 0 || num % digit !== 0) {
            return false;
        }
        temp = Math.floor(temp / 10);
    }
    return true;
}

// Example usage:
const left = 1;
const right = 22;
console.log(selfDividingNumbers(left, right));  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
