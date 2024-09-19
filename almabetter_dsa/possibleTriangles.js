// function possibleTriangles(arr) {
//     let set = new Set()

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             for (let k = 0; k < arr.length; k++) {
//                 if (i !== j && i !== k) {
//                     if (arr[i] !== arr[j] && arr[i] !== arr[k] && arr[j] !== arr[k]) {
//                         set.add([arr[i], arr[j], arr[k]].sort((a, b) => a - b).join(","))
//                     }
//                 }
//             }
//         }
//     }
//     return set.size
// }
// let arr = [6, 4, 9, 7, 8]
// console.log(possibleTriangles(arr))
//--

function findPairs(nums, target) {
    const seen = new Map();
    const pairs = [];

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen.has(complement)) {
            pairs.push([complement, nums[i]]);
        }
        
        seen.set(nums[i], i);
    }

    return pairs;
}
const nums = [1,2,3];
const target = 4;
console.log(findPairs(nums, target)); 