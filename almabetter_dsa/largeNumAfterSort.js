let fun = (num) => {
    let temp = num
    let odd = [], even = [], firstNum = 0

    function isEven(num) {
        if (num % 2 === 0) {
            return true
        } else {
            return false
        }
    }

    while (temp > 0) {
            let reminder = temp % 10
            if (isEven(reminder)) {
                even.push(reminder)
            } else {
                odd.push(reminder)
            }
            temp = parseInt(temp / 10)
    }

    odd = odd.sort((a, b) => a - b)
    even = even.sort((a, b) => a - b)
    let str = ""
    let i = even.length - 1; j = odd.length - 1

    while (i >= 0 || j >= 0) {
        if (isEven(firstNum)) {
            str = str + even[i]
            str = str + odd[j]

        } else {
            str = str + odd[j]
            str = str + even[i]
        }
        i--
        j--
    }
    return Number(str)
}

console.log(fun(658769))

 