function findMinMax(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
    }

    return { min, max };
    
}

const array = [3, 1, 7, 4, 5, 9, 2];
const result = findMinMax(array);

console.log("Minimum element is", result.min);
console.log("Maximum element is", result.max);




