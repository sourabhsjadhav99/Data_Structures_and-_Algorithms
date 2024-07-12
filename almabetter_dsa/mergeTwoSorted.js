  function merge(leftArr, rightArr) {
    const sortedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] <= rightArr[rightIndex]) {
        sortedArr.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        sortedArr.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }
  
    while (leftIndex < leftArr.length) {
      sortedArr.push(leftArr[leftIndex]);
      leftIndex++;
    }
  
    while (rightIndex < rightArr.length) {
      sortedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  
    return sortedArr
  }
  
console.log(merge([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]))


//  function merge(leftArr, rightArr) {
//     const sortedArr = []
//     while (leftArr.length && rightArr.length) {
//       if (leftArr[0] <= rightArr[0]) {
//         sortedArr.push(leftArr.shift())
//       } else {
//         sortedArr.push(rightArr.shift())
//       }
//     }
//     return [...sortedArr, ...leftArr, ...rightArr]
//   }