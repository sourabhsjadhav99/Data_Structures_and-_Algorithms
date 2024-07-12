// const sortPeoples = function(names, heights) {
//     let tempHeights=[...heights]

//     let sortedHeight = heights.sort((a,b)=>b-a)
//     let sortedNames =[]
//     for(let ind of sortedHeight){
//        let nameInd= tempHeights.indexOf(ind)
//        sortedNames.push(names[nameInd])
//     }

//     return sortedNames


// };
// let names = ["Mary","John","Emma"], heights = [180,165,170]

// console.log(sortPeoples(names, heights))

const sortPeoples = function (names, heights) {

    let newmap = new Map()
    for (let i = 0; i < names.length; i++) {
        newmap.set(names[i], heights[i])
    }
    let arr = Array.from(newmap).sort((a, b) => b[1] - a[1])
    return arr.map(arr=>arr[0])

};
let names = ["Alice","Bob","bob"], heights = [155,185,150]

console.log(sortPeoples(names, heights))

