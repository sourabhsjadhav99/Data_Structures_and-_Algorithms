function removeColors(s) {
    let arr = s.split("")
    let i = 1
    let j = s.length
    let alice = 0, bob = 0

    while (i < arr.length && j > 0) {
        if (arr[i] === "A" && arr[i] === arr[i - 1] && arr[i] === arr[i + 1]) {
            alice++
        }
        if (arr[j] === "B" && arr[j] === arr[j - 1] && arr[j] === arr[j + 1]) {
            bob++
        }

        i++
        j--
    }
    return alice > bob 
}
let colors = "AA"
console.log(removeColors(colors))