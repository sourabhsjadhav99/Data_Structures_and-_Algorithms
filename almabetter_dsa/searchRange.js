var searchRange = function(nums, target){

    let startInd = nums.indexOf(target)
    let lastInd =nums.lastIndexOf(target)
    let res=[startInd,lastInd].length<2? [-1,-1]:[startInd,lastInd]
    return res
    
};
let nums = [5,7,7,8,8,10], target = 6
console.log(searchRange(nums,target))