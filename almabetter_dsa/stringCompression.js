// let compress = function (chars) {
//     let map = new Map()
//     for (let i=0; i<chars.length; i++){
//         map.set(chars[i], (map.get(chars[i])||0) +1)
//     }
//     return map.size>1 ? (map.size*2) : map.size
// };

// console.log(compress(["a"]))


let compress = function (target, chars) {

    let combinations=[]

    function backtrack(index=0, currentSum, currentComb=[]){

        if(currentSum===target){
            combinations.push(currentComb)
        }


        for(let i=0; i<index; i++){
            currentComb.push(chars[i])
            backtrack(index+1, currentSum+chars[i], currentComb)
            currentComb.pop()
        }



    }
    backtrack(0,0,[])
    return combinations.length
};

console.log(compress(2,[1, 1, 1, 1]))