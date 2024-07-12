
console.log(largestAltitude(  [-4,-3,-2,-1,4,3,2]))

const largestAltitude = function(arr){
    let alttitude =0
    let sum =0

    for(let i=0; i<arr.length; i++){
        sum =sum+arr[i]
        if(sum>alttitude){
            alttitude=sum
        }

    }
return alttitude
};