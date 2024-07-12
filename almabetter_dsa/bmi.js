// function calculateBMI(weight, height) {
//     // Write your code here
//     const bmi = weight / (height * height);

//     if (bmi < 18.5) {
//         return "Underweight";
//     } else if (bmi >= 18.5 || bmi < 24.9) {
//         return "Normal weight";
//     } else if (bmi >= 25 || bmi < 29.9) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }


// Corrected code 
function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        return "Invalid input: Weight and height must be positive numbers.";
    }

    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// 1. Added input validation to check if weight and height are positive numbers. If either of them is non-positive, the function returns an error message.
// 2.Changed the conditions in the if-else statements to use the correct logical operators (&& for "and" instead of || for "or").
// 3.Adjusted the upper limits of the BMI ranges to avoid overlaps and ensure correct classification.

console.log(calculateBMI(45, 1.60))