function combinationSum(candidates, target) {
    const result = [];

    function backtrack(remaining, startIndex, currentList) {
        if (remaining === 0) {
            result.push([...currentList]);
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            if (candidates[i] <= remaining) {
                currentList.push(candidates[i]);
                backtrack(remaining - candidates[i], i, currentList);
                currentList.pop();
            }
        }
    }

    backtrack(target, 0, []);
    return result;
}

// Example usage:
const candidates1 = [2, 3, 6, 7];
const target1 = 7;
console.log(combinationSum(candidates1, target1)); // Output: [[2,2,3],[7]]

const candidates2 = [2, 3, 5];
const target2 = 8;
console.log(combinationSum(candidates2, target2)); // Output: [[2,2,2,2],[2,3,3],[3,5]]

const candidates3 = [2];
const target3 = 1;
console.log(combinationSum(candidates3, target3)); // Output: []
