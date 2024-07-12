function sumArray(arr) {
    // let sum =0
	// for(let i=0; i<arr.length; i++){
    //     sum = sum + arr[i]

    // }
    // return sum
    return arr.reduce(( accumulator, current)=>{return current+accumulator}, 0)

}
console.log(sumArray([10, 20, 30, 40,9]))