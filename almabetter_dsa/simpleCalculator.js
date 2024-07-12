function simpleCalculator(num1, num2, operator) {
    if (typeof num1 === "number" && typeof num2 === "number") {

        if (operator === "+") {
            return num1 + num2
        } else if (operator === "-") {
            return num1 - num2
        } else if (operator === "*") {
            return num1 * num2
        } else {
            if (num2 > 0) {
                return num1 / num2
            } else {
                return "Cannot divide by zero."
            }

        }
    } else {
        return "Invalid input. Please enter numeric values."
    }
}

console.log(simpleCalculator(9, 0, "/"))