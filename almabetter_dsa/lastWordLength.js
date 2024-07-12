var lengthOfLastWord = function(s) {
    return s.trim().split(" ").reverse()[0].length
    
};
let str = " fly me to the moon"
console.log(lengthOfLastWord(str))