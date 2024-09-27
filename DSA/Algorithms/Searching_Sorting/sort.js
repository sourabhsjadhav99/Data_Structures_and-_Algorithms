//  Bubble Sort - T-O(n**2) S-O(1) Bubble Sort works by repeatedly swapping adjacent elements if they are in the wrong order, in first iteration largest element is pooped and this will continue until the entire array is sorted
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) { // to skip unnecessary comparisons with elements that are already in their correct positions
//       if (arr[j] > arr[j + 1]) {
//        [ arr[j], arr[j + 1]]=[  arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(bubbleSort(arr)); // Output: [-6, -2, 4, 8, 20]
  // -------------------------------------------------------------------------------------------
// Insertion Sort - T-O(n**2) S-O(1) insertion sort works with sorting the elements while comparing the previous parsed array to put the element to inserted in correct place
  //   function insertionSort(arr) {
  //   for (let i = 1; i < arr.length; i++) {
  //     let numberToInsert = arr[i]
  //     let j = i - 1
  //     while (j >= 0 && arr[j] > numberToInsert) {
  //       arr[j + 1] = arr[j]
  //       j--
  //     }
  //     arr[j + 1] = numberToInsert
  //   }
  //  return arr
  // }
  
  // const arr = [8, 20, -2, 4, -6]
  // console.log(insertionSort(arr)) // [-6, -2, 4, 8, 20]
  // -------------------------------------------------------------------------------------------
  // Merge Sort
  // function mergeSort(arr) {
  //   if (arr.length < 2) {
  //     return arr;
  //   }
  //   const mid = Math.floor(arr.length / 2);
  //   const leftArr = arr.slice(0, mid);
  //   const rightArr = arr.slice(mid);

  //   return merge(mergeSort(leftArr), mergeSort(rightArr));
  // }
  
  // function merge(leftArr, rightArr) {
  //   const sortedArr = [];
  //   let leftIndex = 0;
  //   let rightIndex = 0;
  
  //   while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
  //     if (leftArr[leftIndex] <= rightArr[rightIndex]) {
  //       sortedArr.push(leftArr[leftIndex]);
  //       leftIndex++;
  //     } else {
  //       sortedArr.push(rightArr[rightIndex]);
  //       rightIndex++;
  //     }
  //   }
  
  //  If there are remaining elements in either leftArr or rightArr, add them to the result
  // return sortedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
  // }
  
  // const arr = [8, 20, -2, 4, -6];
  // console.log(mergeSort(arr)); // Output: [-6, -2, 4, 8, 20]
  
  // or 
  //   function mergeSort(arr) {
  //   if (arr.length < 2) {
  //     return arr
  //   }
  //   const mid = Math.floor(arr.length / 2)
  //   const leftArr = arr.slice(0, mid)
  //   const rightArr = arr.slice(mid)
  //   return merge(mergesort(leftArr), mergesort(rightArr))
  // }
  
  // function merge(leftArr, rightArr) {
  //   const sortedArr = []
  //   while (leftArr.length && rightArr.length) {
  //     if (leftArr[0] <= rightArr[0]) {
  //       sortedArr.push(leftArr.shift())
  //     } else {
  //       sortedArr.push(rightArr.shift())
  //     }
  //   }
  //      return sortedArr.concat(leftArr).concat(rightArr)
  // }
  
  // const arr = [8, 20, -2, 4, -6]
  // console.log(mergesort(arr)) // [-6, -2, 4, 8, 20]



  //-------------------------------------------------------------------------------------------
// Quick Sort 
  //   function quickSort(arr) {
  //   if (arr.length < 2){
  //     return arr
  //   }else{
  //     let pivot = arr[arr.length - 1]
  //     let left = []
  //     let right = []
  //     for (let i = 0; i < arr.length - 1; i++) { // need to arr.length-1 due to pivot
  //       if (arr[i] < pivot) {
  //         left.push(arr[i])
  //       } else {
  //         right.push(arr[i])
  //       }
  //     }
  //     return [...quickSort(left), pivot, ...quickSort(right)]
  //   }
  // }
  
  // const arr = [8, 20, -2, 4, -6]
  // console.log(quickSort(arr)) // [-6, -2, 4, 8, 20]

//-------------------------------------------------------------------------------------------
// Selection Sort 
// T-O(n**2) S-O(1)

//   function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//      Assume the current index is the minimum
//     let minIndex = i;
//     Find the index of the minimum element in the unsorted part
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//      Swap the found minimum element with the first element
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]]=[ arr[minIndex],arr[i]];
//     }
//   }
//   return arr;
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(selectionSort(arr));


    //-------------------------------------------------------------------------------------------
// QuickSort function T-O(n**2) S-O(n)
// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left >= right) {
//     return;
//   }
  
//   // Partitioning the array
//   const pivotIndex = partition(arr, left, right);

//   // Sorting the left part
//   quickSort(arr, left, pivotIndex - 1);

//   // Sorting the right part
//   quickSort(arr, pivotIndex + 1, right);
  
//   return arr;
// }

// // Partition function
// function partition(arr, left, right) {
//   // Choosing the rightmost element as pivot
//   const pivot = arr[right];
//   let i = left;

//   // Reordering the array
//   for (let j = left; j < right; j++) {
//     if (arr[j] < pivot) {
//       [arr[i], arr[j]] = [arr[j], arr[i]]; // Swapping elements
//       i++;
//     }
//   }

//   // Moving the pivot to its correct position
//   [arr[i], arr[right]] = [arr[right], arr[i]];
  
//   return i;
// }

// // Example usage
// const array = [10, 7, 8, 9, 1, 5];
// console.log("Sorted array:", quickSort(array));
//----------------------------------------------------------------------------------------------
function heapSort(arr) {
  let n = arr.length;
  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than the largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}
// Example usage
const array = [12, 11, 13, 5, 6, 7];
console.log("Sorted array:", heapSort(array));
