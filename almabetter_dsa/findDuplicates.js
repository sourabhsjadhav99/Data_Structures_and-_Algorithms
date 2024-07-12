// function findDuplicates(arr) {
//     let duplicates = []
//     let unique = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!unique.includes(arr[i])) {
//             unique.push(arr[i])
        
//         } else {
//             duplicates.push(arr[i])
//         }
//     }
//     return duplicates.length>1 ? duplicates:[-1]
// }

function findDuplicates(arr) {
    let map =new Map()
    let duplicates=[]
    for(let i=0; i<arr.length; i++){
        map.set(arr[i], (map.get(arr[i])|| 0)+1)
    }

    for(let [key, values] of map){
        if(values>1){
            duplicates.push(key)
        }
    }
    return duplicates.length ? duplicates:[-1]
}

let arr = [0,3,1,2]
console.log(findDuplicates(arr))