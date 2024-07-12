function quickSelect(arr, n) {
    if (arr.length === 1) {
      return arr[0]; 
    }
    let pivotIndex=arr.length-1
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (i !== pivotIndex) {
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]); 
        }
      }
    }
    
    if (n === left.length + 1) {
      return pivot; 
    } else if (n <= left.length) {
      return quickSelect(left, n); 
    } else {
      return quickSelect(right, n - left.length - 1); 
    }
  }
  
  const arr = [9, 4, 6, 2, 7, 1];
  const n = 2;
  const nthSmallest = quickSelect(arr, n);
  
  console.log(nthSmallest);