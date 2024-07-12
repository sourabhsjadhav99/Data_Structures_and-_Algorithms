function maxCandies(candyType) {
    const uniqueCandies = new Set(candyType);
    const maxCandyTypes = candyType.length / 2; 
    return Math.min(uniqueCandies.size, maxCandyTypes); 
}

// Example usage:
const candyType1 = [1, 1, 2, 2, 3, 3];
console.log(maxCandies(candyType1));