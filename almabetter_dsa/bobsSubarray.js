function findSubarrayWithSum(arr, sum) {
    let currentSum = 0;
    let start = 0;
    let end = 0;
    let found = false;

    while (end <= arr.length) {
        if (currentSum === sum) {
            found = true;
            break;
        } else if (currentSum < sum) {
            currentSum += arr[end];
            end++;
        } else {
            currentSum -= arr[start];
            start++;
        }
    }

    if (found) {
        return arr.slice(start, end);
    } else {
        return "No subarray found";
    }
}

// Example usage:
const arr1 = [1, 2, 3, 7, 5];
const sum1 = 12;
console.log(findSubarrayWithSum(arr1, sum1));  // Output: [2, 3, 7]

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum2 = 15;
console.log(findSubarrayWithSum(arr2, sum2));  // Output: [1, 2, 3, 4, 5]


