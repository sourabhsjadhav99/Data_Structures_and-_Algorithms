let groupAnagram = (strs) => {
    let newMap = new Map()
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i].split("").sort().join("")
        if (newMap.has(str)) {
            // newMap.set(str, [...newMap.get(str), strs[i]])
            newMap.get(str).push(strs[i]);
        } else {
            newMap.set(str, [strs[i]])
        }
    }
    return Array.from(newMap).map(arr => arr[1].sort()).sort((a, b) => a.length - b.length)
}
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagram([""]))
console.log(groupAnagram(strs))