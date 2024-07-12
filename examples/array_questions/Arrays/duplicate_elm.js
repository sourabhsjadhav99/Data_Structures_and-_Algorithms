const nums = [1,2,3, 4, 2, 5, 6, 1];
let allElements = [];
let duplicates = [];

for (let i = 0; i < nums.length; i++) {
    if (allElements.includes(nums[i])) {
        duplicates.push(nums[i]);
    } else {
        allElements.push(nums[i]);
    }
}

let result = duplicates.length > 0 ? "Duplicates Present" : "No Duplicates";

console.log("Duplicate Elements:", duplicates);
console.log("Non-duplicate Elements:", allElements);
console.log("Result:", result);
