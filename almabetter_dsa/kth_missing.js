function findKthMissing(arr, k) {
    let missingCount = 0;
    let current = 1; 
    let index = 0; 

    while (missingCount < k) {
        if (index < arr.length && arr[index] === current) {
            index++;
        } else {
            missingCount++;
            if (missingCount === k) {
                return current;
            }
        }
        current++;
    }
}

// Example usage:
const arr = [2, 3, 4, 7, 11];
const k = 5;
console.log(findKthMissing(arr, k)); // Output: 9