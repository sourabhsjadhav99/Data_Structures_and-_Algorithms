function fibonacci(n) {
    if (n < 0) {
        throw new Error('Input must be a non-negative integer.');
    }
    
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0; // Fibonacci(0)
    let b = 1; // Fibonacci(1)
    let fib = 1;

    for (let i = 2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
}

// Example usage
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55


function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
  
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  }
  
  // Example usage:
  console.log(fibonacci(10)); // 55
  