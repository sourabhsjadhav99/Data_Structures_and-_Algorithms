var sortColors = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let current = 0;
    while (current <= right){
        if(nums[current] == 0){
           let temp = nums[left];
            nums[left] = nums[current];
            nums[current] = temp;
            left++;
            current++;

        }else if(nums[current] === 1){
            current++;
        }else if(nums[current] === 2){
           let temp = nums[current];
            nums[current] = nums[right];
            nums[right] = temp;
            right--;
        }
    }
    return nums
};
console.log(sortColors([2,1,0,2,1,1,0]))


// function sortColors(arr) {
//     let temp = []
//     count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             temp.unshift(0)
//             count++
//         } else if (arr[i] === 2) {
//             temp.push(2)
//         }else if (arr[i] === 1) {
//             temp.splice(count, 0, arr[i])
//         }
//     }
//     return temp
// }
// console.log(sortColors([2, 0, 2, 1, 1, 0, 2]))