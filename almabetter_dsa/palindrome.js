function isPalindrome(str) {
    str= str.toLowerCase()
    let arr =[]
    for (let i=0; i<str.length; i++){
        if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
            arr.push(str[i])
        }
    }
    let str2= arr.join("")
    return str2 === str2.split("").reverse().join("")
}

console.log(isPalindrome("racecar"))