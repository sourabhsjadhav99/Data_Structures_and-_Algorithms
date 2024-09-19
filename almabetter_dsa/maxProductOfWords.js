function maxProduct(words) {
    const n = words.length;
    const charSets = words.map(word => new Set(word));

    let maxProduct = 0;

    // Compare each pair of words
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let common = false;
            for (let char of charSets[i]) {
                if (charSets[j].has(char)) {
                    common = true;
                    break;
                }
            }
            if (!common) {
                const product = words[i].length * words[j].length;
                maxProduct = Math.max(maxProduct, product);
            }
        }
    }

    return maxProduct;
}

