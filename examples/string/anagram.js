// if (s.length !== t.length) {
//     console.log(false);
// } else {
//     let sort_s = s.split("").sort().join("")
//     let sort_t = t.split("").sort().join("")
//     if (sort_s == sort_t) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }


let checkAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }
    let map = new Map()
    for (let i = 0; i < str1.length; i++) {
        map.set(str1[i], (map.get(str1[i]) || 0) + 1)
    }

    for (let i = 0; i < str2.length; i++) {
        if (!map.has(str2[i])|| map.get(str2[i]) === 0) {
            return false
        } else {
            map.set(str2[i], map.get(str2[i]) - 1)
        }
    }

    return true
}
console.log(checkAnagram("ramam", "maramh"))