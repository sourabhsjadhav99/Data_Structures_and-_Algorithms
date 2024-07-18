var capitalizeTitle = function(title) {
    let lower = title.toLowerCase()
    let arr = lower.split(" ")
    for(let i=0; i<arr.length; i++){
        if(arr[i].length>2){
            arr[i]=arr[i].slice(0,1).toUpperCase()+ arr[i].slice(1)
        }
    }
    return arr.join(" ")
};
let title="i lOve code"
console.log(capitalizeTitle(title))