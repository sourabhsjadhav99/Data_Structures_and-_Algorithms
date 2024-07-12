function combinationSum(candidates, target) {
    const result = [];

    function backtrack(start, currentCombination, currentSum) {
        if (currentSum === target) {
            result.push([...currentCombination]);
            return;
        } else {
            for (let i = start; i < candidates.length; i++) {
                if (currentSum + candidates[i] <= target) {
                    currentCombination.push(candidates[i]);
                    backtrack(i, currentCombination, currentSum + candidates[i]);
                    currentCombination.pop();
                }
            }
        }


    }

    backtrack(0, [], 0);

    return result;
}

// Example usage:
const candidates = [2, 3, 6, 7];
const target = 7;
const result = combinationSum(candidates, target);
console.log(result);
