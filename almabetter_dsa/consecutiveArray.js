function Consecutive(arr) {
    let min = Math.min(...arr) 
    let max=Math.max(...arr)
    let arr1 =[]
    for(let i=min; i<max; i++){
        if(!arr.includes(i)){
            arr1.push(i)
        }
    }
    return arr1.length
  }
  console.log(Consecutive([4,8,6]))