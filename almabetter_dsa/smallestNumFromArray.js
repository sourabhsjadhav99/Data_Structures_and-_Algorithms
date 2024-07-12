var minNumber = function (nums1, nums2) {
    let arr1 = []
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            arr1.push(nums1[i])
        }
    }
    if (arr1.length > 0) {
        return Math.min(...arr1)
    } else {
        let small1 = Math.min(...nums1)
        let small2 = Math.min(...nums2)
        if (small1 < small2) {
            return parseInt(String(small1) + String(small2))
        } else {
            return parseInt(String(small2) + String(small1))
        }
    }
};
let nums1 = [4, 1, 3], nums2 = [5, 7]
console.log(minNumber(nums1, nums2))