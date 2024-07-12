function PalindromicSubstring(str) {
    let longestSub = "none"

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            let substr = str.substring(i, j + 1)
            if (isPal(substr) && substr.length >= longestSub.length) {
                longestSub = substr

            }

        }
    }

    function isPal(substr) {
        return substr === substr.split("").reverse().join("")

    }

    return longestSub
}
console.log(PalindromicSubstring("racecar"))