function isPalindrome (s) {
    let start=0;
    let end = s.length-1
    let result
    while(start<=end){
        if(s[start]===s[end]){
            result="YES"
        }else{
            result="NO"
            break
        }
        end--;
        start++

    }
    return result
    
};
console.log(isPalindrome("aba"))