// function findKthLargest(nums, k) {
//     nums.sort((a, b) => b - a);
//     return nums[k - 1];
// }


function findKthLargest(nums, k) {
    if (k < 1 || k > nums.length) {
        return NaN; // Invalid k
    }

    // Helper function to partition the array
    function partition(arr, left, right) {
        const pivot = arr[right];
        let i = left;

        for (let j = left; j < right; j++) {
            if (arr[j] <= pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }

        [arr[i], arr[right]] = [arr[right], arr[i]];
        return i;
    }

    // Perform the quickselect algorithm
    function quickselect(arr, left, right, k) {
        if (left === right) {
            return arr[left];
        }

        const pivotIndex = partition(arr, left, right);

        if (k === pivotIndex + 1) {
            return arr[pivotIndex];
        } else if (k < pivotIndex + 1) {
            return quickselect(arr, left, pivotIndex - 1, k);
        } else {
            return quickselect(arr, pivotIndex + 1, right, k);
        }
    }

    // Call quickselect to find the k-th largest element
    return quickselect(nums, 0, nums.length - 1, k);
}

// Example usage:
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const k = 3; // Finding the 3rd largest number

const kthLargest = findKthLargest(array, k);
console.log(kthLargest)