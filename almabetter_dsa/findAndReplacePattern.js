var findAndReplacePattern = function (words, pattern) {
    let arr = []
    for (let i = 0; i < words.length; i++) {
        if (checkPattern(words[i], pattern)) {
            arr.push(words[i])

        }
    }

    function checkPattern(word, pattern) {
        if (word.length !== pattern.length) return false;

        let map1 = new Map()
        let map2 = new Map()
        for (let i = 0; i < word.length; i++) {
            if (!map1.has(pattern[i])) {
                map1.set(pattern[i], word[i])
            } if (!map2.has(word[i])) {
                map2.set( word[i], pattern[i])
            }
            if (map1.get(pattern[i]) !== word[i] || map2.get(word[i]) !== pattern[i]) {
                return false
            } 

        }
        return true
    }

    return arr
};
let words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"], pattern = "abb"
console.log(findAndReplacePattern(words, pattern))