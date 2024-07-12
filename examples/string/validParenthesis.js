// const isValid = (s) => {
//     if (s.length % 2 !== 0) return false;

//     const stack = [];
//     const map = new Map([
//         ['(', ')'],
//         ['[', ']'],
//         ['{', '}']
//     ]);


//     for (let i = 0; i < s.length; i += 1) {
//         if (map.has(s[i])) {
//             stack.push(map.get(s[i]));
//         } else if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
//             stack.pop();
//         }else{
//             return false
//         }
//     }
//     return stack.length === 0;
// };
// console.log(isValid("({{{)}}}"))



var isValid = function (s) {
    const obj = { "(": ")", "{": "}", "[": "]" };
    const stack = [];
    for (let ch of s) {
      if (obj[ch]) {
        stack.push(obj[ch]);
      } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
        stack.pop();
      } else {
        return false;
      }
    }
    return stack.length === 0;
  };
console.log(isValid("({{{)}}}"))