function kthGrammar(n, k) {
    if (n === 1) {
        return 0; // The first row always contains 0
    }
    
    const mid = Math.pow(2, n - 1) / 2; // Calculate the midpoint of the row
    
    if (k <= mid) {
        return kthGrammar(n - 1, k); // If k is in the first half, recurse on the previous row
    } else {
        return 1 - kthGrammar(n - 1, k - mid); // If k is in the second half, negate the result of the recursion on the previous row
    }
}

const n = 3;
const k = 3;
console.log(kthGrammar(n, k)); // Output: 1