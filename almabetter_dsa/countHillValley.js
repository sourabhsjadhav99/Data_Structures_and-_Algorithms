function countHillValley(nums) {

    let set = [...new Set(nums)]
    let hills = 0, valleys = 0
    for (let i = 1; i < set.length - 1; i++) {
        if (set[i - 1] < set[i] && set[i + 1] < set[i]) {
            hills += 1
        } else if (set[i - 1] > set[i] && set[i + 1] > set[i]) {
            valleys += 1
        }
    }
    return hills + valleys
}
let nums =[6,6,5,5,4,1] //[2, 4, 1, 1, 6, 5]
console.log(countHillValley(nums))