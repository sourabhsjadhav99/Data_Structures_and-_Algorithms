// function reverseArray(arr) {
//     let reversedArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArray.push(arr[i]);
//     }
//     return reversedArray;
// }

// // Example usage:
// const arr = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(arr);
// console.log(reversedArray);


//---------------------------------------------------------------
const arr = [1, 2, 3, 4, 5];
let start = 0;
let end = arr.length - 1;

while (end > start) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    end--;
    start++;
}

console.log(arr);
