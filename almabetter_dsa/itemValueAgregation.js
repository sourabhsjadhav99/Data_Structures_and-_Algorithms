function aggregateItemValues(items1, items2) {
    const valueMap = new Map(); 
    for (const [value, weight] of items1) {
        if (valueMap.has(value)) {
            valueMap.set(value, valueMap.get(value) + weight);
        } else {
            valueMap.set(value, weight);
        }
    }
    for (const [value, weight] of items2) {
        if (valueMap.has(value)) {
            valueMap.set(value, valueMap.get(value) + weight);
        } else {
            valueMap.set(value, weight);
        }
    }
    const result = Array.from(valueMap).sort((a, b) => a[0] - b[0]).map((elm)=>[String(elm[0]), elm[1]])
    return result;
}

// Example usage:
const items1 = [[1,3],[2,2]], items2 = [[7,1],[2,2],[1,4]]
console.log(aggregateItemValues(items1, items2)); 

