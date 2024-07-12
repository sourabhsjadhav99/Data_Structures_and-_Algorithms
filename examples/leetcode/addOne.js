var plusOne = function(digits) {
    let str = Number(digits.join(""))
    let add= str +1
    return String(add).split("").map(Number)

    
};
console.log(plusOne([1,2,3]))