// subarray with given sum 

function findSubarrayWithGivenSum(arr, targetSum) {
    let left = 0;
    let right = 0;
    let sum = 0;

    while (right < arr.length) {
        sum = sum + arr[right];
        while (sum > targetSum) {
            sum = sum - arr[left];
            left++;
        }
        if (sum === targetSum) {
            return arr.slice(left, right + 1);
        }
        right++;
    }

    return null;
}
const arr = [1, 2, 3, 4, 5];
const targetSum = 9;
const subarray = findSubarrayWithGivenSum(arr, targetSum);
console.log(subarray);
