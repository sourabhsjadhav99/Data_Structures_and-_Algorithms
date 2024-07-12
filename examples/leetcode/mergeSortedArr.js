var merge = function(nums1, m, nums2, n) {
    for(let i=0; i<n; i++){
        nums1.pop()
    }
    return [...nums1, ...nums2].sort((a,b)=>a-b)
};

// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
let nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1,2,2,3,5,6]
console.log(merge(nums1,m,nums2,n))