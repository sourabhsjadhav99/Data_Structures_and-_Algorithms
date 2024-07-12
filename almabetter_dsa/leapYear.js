// function isLeapYear(year) {
//     return ((year%4===0 && year%100!==0) || (year%400===0)) ? true:false
    
//   }
//   console.log(isLeapYear(1700))
let str="SouraBh"
let str2=[]
for( let char of str){
    if(char.charCodeAt(0)>64 && char.charCodeAt(0)<97){
        str2.push(String.fromCharCode(char.charCodeAt(0)+32))
    }else{
        str2.push(char)
    }

}
return str2