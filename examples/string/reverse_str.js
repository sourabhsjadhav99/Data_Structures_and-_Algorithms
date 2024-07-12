
function reverseString(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {

        reversedString = reversedString + str[i];

    }
    return reversedString;
}

const str = "Hello, World!";
console.log(reverseString(str));
