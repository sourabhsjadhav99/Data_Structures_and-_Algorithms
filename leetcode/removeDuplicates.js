function removeDuplicates(nums) {
    let uniqueNums = [...new Set(nums)]
    for (let i = 0; i < uniqueNums.length; i++) {
        nums[i] = uniqueNums[i];
    }
    return uniqueNums
}

console.log(removeDuplicates([1,1,2]))