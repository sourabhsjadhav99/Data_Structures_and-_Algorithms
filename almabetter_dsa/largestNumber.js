var largestNumber = function(nums) {
    return nums.sort((a,b)=>{
    return `${b}${a}`-`${a}${b}`
}).join("")

};