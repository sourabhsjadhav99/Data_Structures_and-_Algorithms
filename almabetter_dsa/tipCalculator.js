// function calculateTip(billAmount, tipPercentage) {
//     // Write your code here
//     const tipAmount = billAmount * tipPercentage;
//     const totalAmount = billAmount + tipAmount;
//     return number(totalAmount.toFixed(2));
// }

// Corrected code 
function calculateTip(billAmount, tipPercentage) {
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2)); // Use Number() instead of number()
}
// 1.Changed number(totalAmount.toFixed(2)) to Number(totalAmount.toFixed(2)) to use the correct syntax for converting the total amount to a number and rounding it to two decimal places.
const bill1 = 60.75;
const tipPercentage1 = 0.25;
console.log(calculateTip(bill1, tipPercentage1)); // Output: 75.94

const bill2 = 90.00;
const tipPercentage2 = 0.10;
console.log(calculateTip(bill2, tipPercentage2)); // Output: 99.00

