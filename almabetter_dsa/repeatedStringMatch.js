var repeatedStringMatch = function(a, b) {
    let count = 1;
    let temp = a;
    
    // Repeat `a` until its length is at least the length of `b`
    while (temp.length < b.length) {
        temp += a;
        count++;
    }

    if (temp.indexOf(b) !== -1) {
        return count;
    }

    temp += a;
    if (temp.indexOf(b) !== -1) {
        return count + 1;
    }
    
    return -1;
};
let a = "abcd", b = "cdabcdab"
console.log(repeatedStringMatch(a,b))