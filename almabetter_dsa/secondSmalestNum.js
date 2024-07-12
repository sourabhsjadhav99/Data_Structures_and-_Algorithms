function findSecondSmallest(numbers) {
    let firstSmallest = Infinity
    let secondSmallest = Infinity
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]<firstSmallest){
            secondSmallest=firstSmallest
            firstSmallest=numbers[i]
        }
        if(numbers[i]<secondSmallest && numbers[i] !== firstSmallest){
            secondSmallest=numbers[i]
        }
    }
    return secondSmallest
  }
console.log(findSecondSmallest( [5, 3, 8, 1, 9]))  