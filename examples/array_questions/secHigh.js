let arr = [13,0,1,11,0, 10, 2, 9]

let highest = -Infinity
let secHighest = -Infinity

for(let i=0; i< arr.length; i++){
    highest=Math.max(highest, arr[i])
}
for(let i=0; i< arr.length; i++){
   if(arr[i]<highest) {
    secHighest=Math.max(secHighest, arr[i])
}
}
console.log(highest, secHighest);

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > highest) {
//         secHighest = highest
//         highest = arr[i]
        
//     }else if(arr[i]>secHighest){
//         secHighest=arr[i]
//     }
// }
console.log(highest, secHighest);