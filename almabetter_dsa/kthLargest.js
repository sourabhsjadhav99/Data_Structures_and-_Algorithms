// var findKthLargest = function(nums, k) {
//     let sortedArr=nums.sort((a,b)=>b-a)
//     let newSet= new Set(sortedArr)
//     return Array.from(newSet)[k-1]
    
// };
// let nums = [3,2,3,1,2,4,5,5,6], k=4
// console.log(findKthLargest(nums,k))


var findKthLargest = function(nums, k) {
    let sortedArr=nums.map(Number).sort((a,b)=>b-a)
    let newSet= new Set(sortedArr)
    return String(Array.from(newSet)[k-1])
    
};
let nums = ["2","21","12","1"], k = 3
console.log(findKthLargest(nums,k))