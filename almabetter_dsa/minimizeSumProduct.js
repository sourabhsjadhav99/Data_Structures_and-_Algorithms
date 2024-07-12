function minValue(A, B, N) {
    A.sort((a, b) => a - b); // Sort array A in non-decreasing order
    B.sort((a, b) => a - b); // Sort array B in non-decreasing order

    let minSum = 0;
    for (let i = 0; i < N; i++) {
        minSum += A[i] * B[N - 1 - i]; // Multiply smallest elements of A with largest elements of B
    }

    return minSum;
}

// Example usage:
console.log(minValue([3, 1, 1], [6, 5, 4], 3)); // Output: 23
console.log(minValue([6, 1, 9, 5, 4], [3, 4, 8, 2, 4], 5)); // Output: 80
