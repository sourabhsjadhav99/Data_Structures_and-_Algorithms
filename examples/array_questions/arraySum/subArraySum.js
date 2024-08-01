
function subarraySum(arr, target) {
    const result = [];

    for (let start = 0; start < arr.length; start++) {
        let sum = 0;
        for (let end = start; end < arr.length; end++) {
            sum += arr[end];
            if (sum === target) {
                result.push(arr.slice(start, end + 1));
            } else if (sum > target) {
                continue
            }
        }
    }

    return result.length
}
// Example usage:
console.log(subarraySum([1, 1, 1], 2)); // Output: 2
console.log(subarraySum([1, 2, 3], 3)); // Output: 2
console.log(subarraySum([1, -1, 0], 0)); // Output: 3
