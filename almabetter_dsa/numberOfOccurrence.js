function countOccurrences(arr, X) {
    // Function to find the first occurrence of X in sorted array arr
    function findFirst(arr, X) {
        let low = 0;
        let high = arr.length - 1;
        let firstOccurrence = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === X) {
                firstOccurrence = mid;
                high = mid - 1; // Continue searching towards the left (lower indices)
            } else if (arr[mid] < X) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return firstOccurrence;
    }

    // Function to find the last occurrence of X in sorted array arr
    function findLast(arr, X) {
        let low = 0;
        let high = arr.length - 1;
        let lastOccurrence = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === X) {
                lastOccurrence = mid;
                low = mid + 1; // Continue searching towards the right (higher indices)
            } else if (arr[mid] < X) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return lastOccurrence;
    }

    // Count occurrences of X
    let firstIndex = findFirst(arr, X);
    let lastIndex = findLast(arr, X);

    if (firstIndex === -1 || lastIndex === -1) {
        return 0; // If X is not found in the array
    }

    return lastIndex - firstIndex + 1;
}

// Example usage:
let arr = [1, 1, 2, 2, 2, 2, 3];
let X = 2;
console.log(countOccurrences(arr, X)); // Output: 4
