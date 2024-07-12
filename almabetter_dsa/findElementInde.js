let findElementIndex = (arr, x) => {

    let start = 0
    let end = arr.length - 1
  
    while (start <= end) {
        let mid = Math.floor((end + start) / 2)
        if (arr[mid] === x) {
            return mid
        } else if (x<arr[mid]) {
            end = mid - 1

        } else {
            start = mid + 1
        }
    }
    return -1
}
let arr = [1, 2, 3, 4, 5], x = 5
console.log(findElementIndex(arr, x))