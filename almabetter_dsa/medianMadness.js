const distinctAverages = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let i = 0;
    let j = nums.length - 1
    let distinctAverage = new Set()

    while (i < j) {
        let avg = (nums[i]+ nums[j]) / 2
        distinctAverage.add(avg)
        i++;
        j--
    }
    return distinctAverage.size
};
let nums = [4, 1, 4, 0, 3, 5]
console.log(distinctAverages(nums))