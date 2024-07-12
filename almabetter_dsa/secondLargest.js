function findSecondLargestDistinct(arr) {
    let firstLargest = -Infinity
    let secondLargest = -Infinity
    for(let i=0; i<arr.length; i++){
        if(arr[i]>firstLargest){
            secondLargest=firstLargest
            firstLargest=arr[i]
        }
        if(arr[i]>secondLargest && arr[i] !== firstLargest){
            secondLargest=arr[i]
        }
    }
    return secondLargest

}

console.log(findSecondLargestDistinct([12, 35, 1, 10, 34, 1]))