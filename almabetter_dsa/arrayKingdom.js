// var containsDuplicate = function (nums) {
//     let map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], (map.get(nums[i])||0)+1)


//     }

//     for (let [key, value] of map) {
//         if (value > 1) {
//             return true
//         }
//     }
//     return false
// };

// var containsDuplicate = function (nums) {
//     let map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         if (!map.has(nums[i])) {
//             map.set(nums[i], 1)
//         } else {
//             return true
//         }
//     }
//     return false
// };

function hasDuplicates(nums) {
    let seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
let nums = [1, 2, 3, 4]
console.log(containsDuplicate(nums))
