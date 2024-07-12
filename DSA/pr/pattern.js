let str = ""
let num = 5

// for(let i=0; i<num; i++){
//     for(let j=0; j<=i; j++){
//         str=str+ "*"

//     }
//     str=str+"\n"
// }
// console.log(str)

// for(let i=0; i<num; i++){
//     for(let k=0; k<=num-i; k++){
//         str=str+ " "

//     }

//     for(let j=0; j<=i; j++){
//         str=str+ "*"

//     }
//     str=str+"\n"
// }
// console.log(str)

// for(let i=0; i<num; i++){
//     // for(let k=0; k<=num-i; k++){
//     //     str=str+ " "

//     // }

//     for(let j=0; j<num-i; j++){
//         str=str+ "*"

//     }
//     str=str+"\n"
// }
// console.log(str)



// for(let i=0; i<num; i++){
//     for(let k=0; k<=i; k++){
//         str=str+ " "

//     }

//     for(let j=0; j<num-i; j++){
//         str=str+ "*"

//     }
//     str=str+"\n"
// }

// console.log(str)


// for(let i=1; i<=num; i++){
//     for(let k=1; k<=num-i; k++){
//         str=str+ " "

//     }

//     for(let j=0; j<2*i-1; j++){
//         str=str+ "*"

//     }
//     str=str+"\n"
// }
// console.log(str)


// for(let i=0; i<num; i++){
//     for(let k=0; k<i; k++){
//         str=str+ " "

//     }

//     for(let j=0; j<2*(num-i)-1; j++){
//         str=str+ "*"

//     }
//     str=str+"\n"
// }
// console.log(str)



// for(let i=0; i<=num; i++){
//     for(let k=0; k<num-i; k++){
//         str=str+ " "

//     }
//     for(let k=0; k<2*i-1; k++){
//         str=str+ "*"

//     }
//     str=str+"\n"
// }

// for(let i=1; i<=num; i++){
//     for(let k=1; k<=i; k++){
//         str=str+ " "

//     }
//     for(let k=1; k<=2*(num-i)-1; k++){
//         str=str+ "*"

//     }
//     str=str+"\n"
// }
// console.log(str)


// --------------------------------------------------------------------------------------

// for (let i=0; i<num; i++){
//     for (let j=num-i; j>=1; j--){
//         str=str+ j

//     }
//     str=str+"\n"
// }
// console.log(str)


// for (let i=1; i<=num; i++){
//     for (let j=num; j>=i; j--){
//         str=str+ j

//     }
//     str=str+"\n"
// }
// console.log(str)

// let variable =1
// for (let i=1; i<=num; i++){
//     for (let j=1; j<num-i; j++){
//         str=str+ " "    
//     }
//     for (let j=1; j<2*i-1; j++){
//         str=str+ variable
//         variable++   
//     }
//     str=str+"\n"
// }
// console.log(str)


for (let i = 1; i <= num; i++) {
    for (j = 1; j <= num - i; j++) {
        str = str + " "
    }
    for(let k=1; k<=2*i-1; k++){
        str=str+k
    }
    str=str+"\n"

}
console.log(str)