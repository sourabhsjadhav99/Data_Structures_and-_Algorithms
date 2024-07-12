function countOccurrences(numbers, target) {

    let map =new Map()
    for(let i=0; i<numbers.length; i++){
        map.set(numbers[i], (map.get(numbers[i])||0)+1)
    }
    return map.has(target)? map.get(target):0
    
  }

  console.log(countOccurrences([1, 2, 3, 4, 2, 5, 2],8))