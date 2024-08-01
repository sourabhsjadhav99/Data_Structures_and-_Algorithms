function memoizedFib(n, memo = {}) {
    console.log("memoized")
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
    return memo[n];
}
console.log(memoizedFib(6))

function nonMemoizedFib(n) {
    console.log("non memoized")
    if (n <= 1) return n;
    return nonMemoizedFib(n - 1) + nonMemoizedFib(n - 2);
   
}
console.log(nonMemoizedFib(6))