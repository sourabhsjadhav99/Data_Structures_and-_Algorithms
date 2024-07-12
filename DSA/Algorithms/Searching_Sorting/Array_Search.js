// const index = arr.indexOf(target);
//--------------------------------------------------------------------------------------------

// let arr=[-5, 2, 10, 4, 6],target= 10
// const result = arr.find(element => element === target);
// console.log(result)

//--------------------------------------------------------------------------------------------
// Linear Search O(n)
// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === target) {
//         return i
//       }
//     }
//     return -1
//   }
  
//   console.log(linearSearch([-5, 2, 10, 4, 6], 10)) // 2
//   console.log(linearSearch([-5, 2, 10, 4, 6], 6)) // 4
//   console.log(linearSearch([-5, 2, 10, 4, 6], 20)) // -1
//--------------------------------------------------------------------------------------------
// function lastOccurrenceLinearSearch(arr, target) {
//     let lastIndex = -1; 
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             lastIndex = i; 
//         }
//     }
//     return lastIndex;
// }
// console.log(lastOccurrenceLinearSearch([-5, 2, 10, 4, 6], 10))

//--------------------------------------------------------------------------------------------
// function recursiveLinearSearch(arr, target, index = 0) {
//     if (index >= arr.length) {
//         return -1;
//     }

//     if (arr[index] === target) {
//         return index;
//     }
//     return recursiveLinearSearch(arr, target, index + 1);
// }

// console.log(recursiveLinearSearch([-5, 2, 10, 4, 6], 10)); 

//--------------------------------------------------------------------------------------------
// Binory Search O(log n)

// function binarySearch(arr, target) {
//     let leftIndex = 0
//     let rightIndex = arr.length - 1
  
//     while (leftIndex <= rightIndex) {
//       let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//       if (target === arr[middleIndex]) {
//         return middleIndex
//       }
//       if (target < arr[middleIndex]) {
//         rightIndex = middleIndex - 1
//       } else {
//         leftIndex = middleIndex + 1
//       }
//     }
//     return -1
//   }
  
//   console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
//   console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3
//   console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1
//--------------------------------------------------------------------------------------------


// Recursive Binory Search 

// function recursiveBinarySearch(arr, target, left = 0, right = arr.length - 1) {
//     if (left > right) {
//         return -1; // Base case: target is not found
//     }
    
//     const mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//         return mid; // Base case: target is found
//     } else if (arr[mid] > target) {
//         return recursiveBinarySearch(arr, target, left, mid - 1); // Recursive case: search in the left half
//     } else {
//         return recursiveBinarySearch(arr, target, mid + 1, right); // Recursive case: search in the right half
//     }
// }

//   console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) // 4
//   console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)) // 3
//   console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) // -1

// ---------------------------------------------------------------------------------------------------------------- 
// Advance Searching 

// // Ternary Searching 
// function ternarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid1 = Math.floor(left + (right - left) / 3);
//         let mid2 = Math.floor(right - (right - left) / 3);

//         if (arr[mid1] === target) {
//             return mid1;
//         }

//         if (arr[mid2] === target) {
//             return mid2;
//         }

//         if (target < arr[mid1]) {
//             right = mid1 - 1;
//         } else if (target > arr[mid2]) {
//             left = mid2 + 1;
//         } else {
//             left = mid1 + 1;
//             right = mid2 - 1;
//         }
//     }

//     return -1; // Element not found
// }

// // Example usage:
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const target = 5;
// console.log(ternarySearch(arr, target)); // Output: 4 (index of the target element)

//---------------------------------------------------------------------------------------------------------------

function binarySearch(arr, left, right, target) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Element found, return its index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }
    return -1; // Element not found
}

function exponentialSearch(arr, target) {
    const n = arr.length;
    if (arr[0] === target) {
        return 0; // Element found at the first index
    }

    // Find the range for binary search by doubling the index
    let i = 1;
    while (i < n && arr[i] <= target) {
        i *= 2;
    }

    // Perform binary search in the determined range
    return binarySearch(arr, Math.floor(i / 2), Math.min(i, n - 1), target);
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 15;
console.log(exponentialSearch(arr, target)); // Output: 7 (index of the target element)
