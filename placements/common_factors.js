function common_factors(num1, num2) {
    let min = Math.min(num1, num2)
    let count = 0
    for (let i = 1; i <= min; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            count++
        }
    }
    return count
}

let num1 = 25, num2 = 30

console.log(common_factors(num1, num2))