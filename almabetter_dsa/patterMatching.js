function patternMatching(str, pattern) {

    // if(str.includes(pattern)){
    //     return true
    // }else{
    //     return false
    // }
    let regex = RegExp(pattern, 'g')
    return regex.test(str)


}
let str = "hello world", pattern = "abs"
console.log(patternMatching(str, pattern))