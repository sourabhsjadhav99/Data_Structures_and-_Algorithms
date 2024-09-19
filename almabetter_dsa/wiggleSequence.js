function wiggle_sequence(array) {
    let isPositive = false
    let arr = [array[0]]

    for (let i = 1; i < array.length; i++) {
        if (array[i] - array[i - 1] < 0 && isPositive === true) {
            isPositive = false
            arr.push(array[i])
        } else if (array[i] - array[i - 1] > 0 && isPositive === false) {
            isPositive = true
            arr.push(array[i])
        }
    }
    return arr.length
}

;
let arr = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
// let arr = [1,7,4,2,9,2,5]
console.log(wiggle_sequence(arr))
