function findLeaders(arr) {
    const leaders = [];
    let maxRight = arr[arr.length - 1]; // Initialize maxRight with the rightmost element

    // Iterate through the array from right to left
    for (let i = arr.length - 1; i >= 0; i--) {
        // If the current element is greater than or equal to maxRight, it's a leader
        if (arr[i] >= maxRight) {
            leaders.unshift(arr[i]); // Add the leader to the beginning of the leaders array
            maxRight = arr[i]; // Update maxRight
        }
    }

    return leaders;
}

// Example usage:
const inputArray = [16, 17, 4, 3, 5, 2];
console.log(findLeaders(inputArray)); // Output: [17, 5, 2]
