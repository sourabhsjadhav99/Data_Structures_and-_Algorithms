var plusOne = function(digits) {
    let num = Number(digits.join(""))
    let add= num +1
    return String(add).split("").map(Number)

    
};
console.log(plusOne([1,2,3]))