function reverseVowels(s) {
    let arr = s.split("")
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let i = 0
    let j = s.length

    while (i < j) {
        if (!vowels.includes(arr[i])) {
            i++

        } else if (!vowels.includes(arr[j])) {
            j--
        } else if (vowels.includes(arr[i]) && vowels.includes(arr[j])) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--

        }


    }
return arr.join("")
}
console.log(reverseVowels("hello"))