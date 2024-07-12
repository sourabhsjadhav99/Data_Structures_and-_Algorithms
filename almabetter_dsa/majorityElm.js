// const majorityElement = function (nums) {
//     let map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], (map.get(nums[i]) + 1) || 1)
//     }
//     let arr = Array.from(map).sort((a,b)=>b[1]-a[1])
  
//     return arr[0][0]
// };

let arr =[2,2,1,1,1,2,2] // [3,2,3]
console.log(majorityElement(arr))

var majorityElement = function(nums) {
    let count = 0;
    let res = 0;
    for (let num of nums) {
        if (count === 0) {
            res = num;
        }
        if (res === num) {
            count = count + 1;
        } else {
            count = count - 1;
        }
    }
    return res;
};