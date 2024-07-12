function missingNumber(nums) {
    let add= nums.length*(nums.length+1)/2
    let sum = nums.reduce((sum, elm)=>sum+elm)
    return add-sum
}

console.log(missingNumber([0,1,3]))
