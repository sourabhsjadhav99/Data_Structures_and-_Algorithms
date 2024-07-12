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


function anagram(s, t) {
    s = s.split("")
    t = t.split("")
    if (s.length !== t.length) {
        return false
    } else {
        let hashmap = new Map()
        for (let i = 0; i < s.length; i++) {
            if (!hashmap.has(s[i])) {
                hashmap.set(s[i], 1)
            } else {
                hashmap.set(s[i], hashmap.get(s[i]) + 1)
            }
        }
        for (let i = 0; i < t.length; i++) {
            let char = t[i]
            if (hashmap.has(char) && hashmap.get(char) >= 1) {
                hashmap.set(char, hashmap.get(char) - 1)
            } else {
                return false
            }
        }
        return true
    }
}

let s = "helloo";
let t = "helloo"
console.log(anagram(s, t));

// let checkAnagram =(str1, str2)=>{
//     if(str1.length!==str2.length){
//         return false
//     }
//     let arr1=str1.split("").sort().join("")
//     let arr2=str2.split("").sort().join("")
//     return arr1===arr2

// }
// console.log(checkAnagram("ramam", "mara"))


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
console.log(checkAnagram("ramam", "maram"))