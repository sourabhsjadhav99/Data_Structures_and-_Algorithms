let str = "welcome to 10x"
// emoclew ot x01
let arr = str.split(" ")
let arr2 = ""
for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
        arr2 = arr2 + arr[i].split("").reverse().join("")
    } else {
        arr2 = arr2 + arr[i].split("").reverse().join("") + " "
    }

}
console.log(`${arr2}`)