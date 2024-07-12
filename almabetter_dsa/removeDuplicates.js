// function getUniqueNumbers(numbers) {
//     let uniqueArr=[]
//     for(let i=0; i<numbers.length; i++){
//         if(!uniqueArr.includes(numbers[i])){
//             uniqueArr.push(numbers[i])
//         }
//     }
//     return uniqueArr

// }
// console.log(getUniqueNumbers([1, 2, 3, 2, 4, 4, 5]))

// set to maintain order
function removeDuplicates(arr) {
    const uniqueSet = new Set();
    for(let i=0; i<arr.length; i++){
        if(!uniqueSet.has(arr[i])){
            uniqueSet.add(arr[i])

        }
    }
    return Array.from(uniqueSet)
}

// Test case
const originalArray = [1, 2,9, 3, 3, 4, 5, 4, 2];
const newArray = removeDuplicates(originalArray);
console.log(newArray); // Output: [1, 2, 3, 4, 5]