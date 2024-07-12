function maxOccuringChar(s) {
    s = s.split("")
    let max = null, val=null
    let hashmap = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!hashmap.has(s[i])) {
            hashmap.set(s[i], 1)
        } else {
            hashmap.set(s[i], hashmap.get(s[i]) + 1)
        }
    }
    for (let [key, value] of hashmap) {
        if (value > max) {
            max = value
            val=key
        }

    }
    return `${val}=>${max}`
}

let s = "hellooo";

console.log(maxOccuringChar(s));