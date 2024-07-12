var checkString = function (s) {
    let temp = s

    for (let i = 0; i < temp.length; i++) {
        let j = i + 1
        if (temp[i] === temp[j]) {
            continue
        } else {
            let str =temp.slice(j)
            if(str.includes(temp[i])){
                return false
            }
        }
    }
    return true

}
let s = "bbb"
console.log(checkString(s))