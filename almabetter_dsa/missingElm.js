function findMissingElement(arr, N) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let arr2=[]
    for(let i=min; i<max; i++ ){
        if(!arr.includes(i)){
            arr2.push(i)
        }       
    }
   return arr2.toString()
}

console.log(findMissingElement([1,2,3,5,8], 5))


// when one elment to find 
// function findMissingElement(arr, N) {
//     const expectedSum = (N * (N + 1)) / 2;
//      const actualSum = arr.reduce((sum, num) => sum + num, 0);
 
//      // The missing element is the difference between the expected sum and the actual sum
//      const missingElement = expectedSum - actualSum;
 
//      return missingElement;
//  }