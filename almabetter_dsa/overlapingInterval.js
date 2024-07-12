function overlap(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let merge =[]
    let currentInt=intervals[0]

    for(let i=1; i<intervals.length; i++){
        if(intervals[i][0]<=currentInt[1]){
            currentInt[1]=Math.max(currentInt[1],intervals[i][1])

        }else{
            merge.push(currentInt)
            currentInt=intervals[i]
        }

    }
    merge.push(currentInt)
    return merge
}
let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
console.log(overlap(intervals))