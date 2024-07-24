function removeElement(nums, element) {
    let arr =nums.filter(elm=> elm !== element);
    for(let i=0 ; i<arr.length ; i++) {
        nums[i]=arr[i]
    }
    return arr.length
}
let nums = [3,2,2,3], val = 3
console.log(removeElement(nums,val))