const plusOne = function(digits){
    let num = digits.join("")
    let num2 = String(Number(num)+1)
    return num2.split("").map(Number)
};
let arr=[1,2,3]
console.log(plusOne(arr))