function maxSubarraySum(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      currentSum += arr[i];
      
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
      
      if (currentSum < 0) {
        currentSum = 0;
      }
    }
    
    return maxSum;
  }
  const arr = [1,2,-4,3,5];
  const maxSum = maxSubarraySum(arr);
  console.log(maxSum)  