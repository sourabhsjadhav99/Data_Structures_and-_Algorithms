function mostFrequentWord(arr) {
    let map = new Map()
    let mostFrequentWord = '';
    let maxFrequency = 0;

    for (let word of arr) {
        let count = map.get(word) || 0
        map.set(word, count+ 1)
        if (count + 1 >= maxFrequency) {
            mostFrequentWord = word;
            maxFrequency = count + 1;
        }
    }

  return mostFrequentWord
}
let arr = ["same", "to"]
console.log(mostFrequentWord(arr))