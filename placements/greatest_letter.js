// function greatestEnglishLetter(s) {
//     // let maxLetter = '';
//     // let maxAscii = -1;
//     // let flag = true

//     // for (let char of s) {
//     //     let charCodes = char.charCodeAt(0)

//     //         if (charCodes > maxAscii && charCodes < 97) {
//     //             maxAscii = charCodes
//     //             maxLetter = char
//     //             flag= true
//     //         } else if(flag===false){
//     //             maxAscii = charCodes
//     //             maxLetter = char
//     //         }
        
//     // }

//     // return maxLetter;
//     let maxLetter = '';
//     let maxAscii = -1;

//     for (let char of s) {
//         let charCode = char.charCodeAt(0);

//         // Check if char is a lowercase letter
//         if (char >= 'a' && char <= 'z') {
//             let upperCaseChar = char.toUpperCase();
//             let upperCaseCharCode = upperCaseChar.charCodeAt(0);

//             // Update maxLetter if current uppercase letter is greater
//             if (upperCaseCharCode > maxAscii) {
//                 maxAscii = upperCaseCharCode;
//                 maxLetter = upperCaseChar;
//             }
//         }
//     }

//     return maxLetter;
// }

// // Example usage:
// const s = "arRAzFif";
// console.log(greatestEnglishLetter(s));

function greatestEnglishLetter(s) {
    let lowercase_set = new Set();
    let uppercase_set = new Set();
    
    // Traverse the string to populate sets
    for (let char of s) {
        if (char >= 'a' && char <= 'z') {
            lowercase_set.add(char);
        } else if (char >= 'A' && char <= 'Z') {
            uppercase_set.add(char);
        }
    }
    
    // Iterate through uppercase alphabet from 'Z' to 'A'
    for (let code = 'Z'.charCodeAt(0); code >= 'A'.charCodeAt(0); code--) {
        let letter = String.fromCharCode(code);
        if (lowercase_set.has(letter.toLowerCase()) && uppercase_set.has(letter)) {
            return letter;
        }
    }
    
    return ""; // Return empty string if no such letter found
}

// Example cases:
console.log(greatestEnglishLetter("arRAzFif")); // Output: "R"
console.log(greatestEnglishLetter("AbCdEfGhIjK")); // Output: ""
