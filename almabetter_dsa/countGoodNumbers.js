function countGoodNumbers(n) {
    const MOD = 10**9 + 7;
    let evenCount = 5;  // Numbers ending in 0, 2, 4, 6, 8 are even
    let primeCount = 4; // Numbers ending in 2, 3, 5, 7 are prime
    
    for (let length = 2; length <= n; length++) {
        const newEvenCount = (evenCount * 5 + primeCount * 4) % MOD;
        const newPrimeCount = (evenCount + primeCount * 4) % MOD;
        evenCount = newEvenCount;
        primeCount = newPrimeCount;
    }
    
    return (evenCount + primeCount) % MOD;
}