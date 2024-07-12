function areAnagrams(str1, str2) {
    let map = new Map()
    for (let i = 0; i < str1.length; i++) {
        map.set(str1[i], (map.get(str1[i]) || 0) + 1)
    }
    for (let j = 0; j < str2.length; j++) {
        if (map.has(str2[j]) && map.get(str2[j]) != 0) {

            map.set(str2[j], map.get(str2[j]) - 1)
        } else {
            return "not anagram"
        }
    }
    return "anagram"
}
const str1 = "listen";
const str2 = "silent";
console.log(areAnagrams(str1, str2));

