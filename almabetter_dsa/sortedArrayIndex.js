var searchInsert = function (nums, target) {
    let firstIndex = 0
    let lastIndex = nums.length - 1

    while (firstIndex <= lastIndex) {
        let middle = Math.floor((firstIndex + lastIndex) / 2)
        if (target === nums[middle]) {
            
            return middle
        } else if (target < nums[middle]) {
            lastIndex = middle - 1

        } else {
            firstIndex = middle + 1

        }

    }
    return firstIndex
};
console.log(searchInsert([1, 4, 5, 6, 8, 9, 12], 7))