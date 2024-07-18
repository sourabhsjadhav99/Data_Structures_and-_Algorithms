function topKFrequent(words, k) {
    // Step 1: Count the frequency of each word
    const freqMap = new Map();
    for (const word of words) {
        freqMap.set(word, (freqMap.get(word) || 0) + 1);
    }

    // Step 2: Convert the map to an array of [word, frequency] pairs
    const freqArray = Array.from(freqMap.entries());

    // Step 3: Sort the array by frequency and then lexicographical order
    freqArray.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1];
    });

    // Step 4: Extract the top k words
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(freqArray[i][0]);
    }

    return result;
}

// Example 1
const words1 = ["i", "love", "almabetter", "i", "love", "coding"];
const k1 = 2;
console.log(topKFrequent(words1, k1)); // Output: ["i", "love"]

// Example 2
const words2 = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"];
const k2 = 4;
console.log(topKFrequent(words2, k2)); // Output: ["the", "is", "sunny", "day"]
