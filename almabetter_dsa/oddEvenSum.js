
function oddOrEvenSum(arr) {
    let sum={ oddSum: 0, evenSum: 0 }
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2===0){
            sum["evenSum"] += arr[i]
        }else{
            sum["oddSum"] += arr[i]
        }
    }
    return sum
  }
  console.log(oddOrEvenSum([7, 13, 42, 31, 55]))