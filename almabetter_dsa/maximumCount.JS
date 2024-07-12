const maximumCount = function (nums) {
    let negativeCount=0
    let positiveCount=0

    for (let i=0; i<nums.length; i++){
        if(nums[i]>0){
            positiveCount++
        }else if(nums[i]<0){
            negativeCount++
        }
    }

    return Math.max(negativeCount, positiveCount)

};
console.log(maximumCount([-3,-2,-1,0,0,1,2]))