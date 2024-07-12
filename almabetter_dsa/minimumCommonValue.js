function findMinCommon(nums1, nums2) {
    let ptr1 = 0;
    let ptr2 = 0;
    
    while (ptr1 < nums1.length && ptr2 < nums2.length) {
        if (nums1[ptr1] === nums2[ptr2]) {
            return nums1[ptr1]; // Found the common integer
        } else if (nums1[ptr1] < nums2[ptr2]) {
            ptr1++; // Move ptr1 to the right
        } else {
            ptr2++; // Move ptr2 to the right
        }
    }
    
    return -1; // No common integer found
}

// Example usage:
console.log(findMinCommon([1, 2, 3], [1, 2, 3]));      // Output: 2
console.log(findMinCommon([1, 2, 3, 6], [2, 3, 4, 5])); // Output: 2

