function rotateArray(arr, k) {
    for(let i=0; i<k; i++){
        let last = arr.pop()
        arr.unshift(last)
       
    }
    return arr
  }
  console.log(rotateArray([7, 8, 9],5))