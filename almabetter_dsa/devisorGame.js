function divisorGame(N) {
    // Alice wins if N is even
    return N % 2 === 0;
}

// Example usage:
console.log(divisorGame(2)); // Output: true
console.log(divisorGame(3)); // Output: false
