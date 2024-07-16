function intToRoman(num) {
    // List of tuples with Roman symbols and their integer values
    const romanSymbols = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    let result = "";

    // Iterate through each symbol-value pair
    for (const [symbol, value] of romanSymbols) {
        // Append the symbol as many times as it fits into num
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Example cases
console.log(intToRoman(3));    // Output: "III"
console.log(intToRoman(58));   // Output: "LVIII"
console.log(intToRoman(1994)); // Output: "MCMXCIV"
