// function twoSum (nums, target){

//     for (let i=0; i<nums.length; i++){
//         for (let j=1; j<nums.length; j++){
//             if(nums[i]+nums[j]===target){
//                 return [i,j]
//             }
        
//         }
//     }

// }

function twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }

    return [];
}
const nums = [2, 7, 4, 11, 15];
const target = 15;
console.log(twoSum(nums, target)); // Output: [0, 1]
