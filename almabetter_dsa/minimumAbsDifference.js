var minimumAbsDifference = function (arr) {
    arr = arr.sort((a, b) => a - b)
    let minDifference = Infinity
    let resultArr = []
    for (let i = 1; i < arr.length; i++) {
        let difference = Math.abs(arr[i] - arr[i - 1])

        if (difference < minDifference) {
            minDifference = difference
            resultArr.length = 0

        }
        if (difference === minDifference) {
            resultArr.push([arr[i - 1], arr[i]])
        }
    }
    return resultArr
};
console.log(minimumAbsDifference([4, 2, 1, 3]))