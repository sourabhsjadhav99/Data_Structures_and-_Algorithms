var commonFactors = function (a, b) {
    let minNum = Math.min(a, b)
    let count = 0

    for (let i = 1; i < Math.ceil(minNum/2); i++) {
        if ((a % i) ===0 &&  (b % i)===0) {
            count++
        }
    }

    return count

};
let a=30, b=25
console.log(commonFactors(a, b))