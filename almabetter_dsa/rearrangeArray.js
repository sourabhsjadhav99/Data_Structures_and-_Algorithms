function rearrangeArray(arr, N) {
    let left = 0; // Pointer starting from the beginning
    let right = arr.length - 1; // Pointer starting from the end

    while (left <= right) {
        // Move left pointer until it points to a positive number
        while (left <= right && arr[left] >= 0) {
            left++;
        }

        // Move right pointer until it points to a negative number
        while (left <= right && arr[right] < 0) {
            right--;
        }

        if (left <= right) {
            // Swap the elements at left and right pointers
            const temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    return arr;
}

const numbers = [2, -4, 5, -7, 8, -1, -3];
console.log(rearrangeArray(numbers))