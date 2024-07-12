// const removeVowelsES6 = (str) => {
//     let regex=/[aeiou]/gi
//     return str.replace(regex, "")


// };
// console.log(removeVowelsES6("Hello, how are you?"))

const removeVowelsES6 = (str) => {
    let arr = str.split("");
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (vowel.includes(arr[i])) {
            arr.splice(i, 1);
        }
    }

    return arr.join("");
};

console.log(removeVowelsES6("Hello, how are you?"));