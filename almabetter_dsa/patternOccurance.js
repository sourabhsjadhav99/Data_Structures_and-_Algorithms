// function findPatternOccurrences(str, pattern) {
//     const arr = [];
//     let ind = str.indexOf(pattern);
//     while (ind !== -1) {
//       arr.push(ind);
//       ind = str.indexOf(pattern, ind + 1);
//     }
//     return arr;
// }
// let str = "abababa", pattern = "aba"
// console.log(findPatternOccurrences(str, pattern))


function findPatternOccurrences(str, pattern) {
  const regex = new RegExp(pattern, 'g');
  let indices = [];
  let match;
  while ((match = regex.exec(str)) !== null) {
    indices.push(match.index);
    // Resetting lastIndex to prevent infinite loop
    regex.lastIndex = match.index + 1;
  }
  return indices;
}

let str = "abababa";
let pattern = "aba";
console.log(findPatternOccurrences(str, pattern));
