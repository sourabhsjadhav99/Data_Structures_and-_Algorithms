// function convertTemperature(temperature, unit) {
//     // Write your code here
//     if (unit === "C") {
//         const fahrenheit = temperature * 9 % 5 + 32;
//         return fahrenheit.toFixed(2) + " F";
//     } else if (unit === "F") {
//         const celsius = (temperature - 32) * 5 % 9;
//         return celsius.toFixed(2) + " C";
//     } else {
//         return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
//     }
// }

// Corrected code 
function convertTemperature(temperature, unit) {
    if (unit === "C") {
        const fahrenheit = temperature * 9 / 5 + 32; // Corrected formula for Celsius to Fahrenheit conversion
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (temperature - 32) * 5 / 9; // Corrected formula for Fahrenheit to Celsius conversion
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

// 1.In the Celsius to Fahrenheit conversion formula, changed % (modulus operator) to / (division operator) to use the correct formula: Fahrenheit = Celsius * 9/5 + 32.
// 2.In the Fahrenheit to Celsius conversion formula, changed % to / to use the correct formula: Celsius = (Fahrenheit - 32) * 5/9.

const temp1 = 25;
const unit1 = "C";
console.log(convertTemperature(temp1, unit1)); // Output: "77.00 F"

const temp2 = -40;
const unit2 = "F";
console.log(convertTemperature(temp2, unit2)); // Output: "-40.00 C"

const temp3 = 100;
const unit3 = "K";
console.log(convertTemperature(temp3, unit3));


