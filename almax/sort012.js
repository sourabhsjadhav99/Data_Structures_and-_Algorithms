var sortColors = function(nums) {
    let lo = 0;
    let hi = nums.length - 1;
    let mid = 0;
    let temp = 0;
    while (mid <= hi){
        if(nums[mid] == 0){
            temp = nums[lo];
            nums[lo] = nums[mid];
            nums[mid] = temp;
            lo++;
            mid++;

        }else if(nums[mid] == 1){
            mid++;
        }else{
            temp = nums[mid];
            nums[mid] = nums[hi];
            nums[hi] = temp;
            hi--;
        }
    }
    return nums
};
console.log(sortColors([2,0,2,1,1,0]))