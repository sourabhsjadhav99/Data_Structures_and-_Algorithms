function findPrimes(n) {
    const primes = [];

    // Helper function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    // Loop through numbers from 2 to n and check if they are prime
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

// Approach:
// Uses a helper function isPrime to check if a number is prime.
// Iterates through numbers from 2 to n and adds prime numbers to the primes array.

// Space Complexity:
// Space complexity is O(n), where n is the input number.

// Time Complexity:
// The isPrime function checks if a number is prime by iterating up to the square root of the number.
// In the worst case, the isPrime function takes O(sqrt(n)) time.
// The findPrimes function calls isPrime for each number from 2 to n, leading to a time complexity of O(n * sqrt(n)).



// Example usage
const primesArray1 = findPrimes(20);
console.log(primesArray1); // Output: [2, 3, 5, 7, 11, 13, 17, 19]
const primesArray2 = findPrimes(9)
console.log(primesArray2)//Output: [2, 3, 5, 7]

