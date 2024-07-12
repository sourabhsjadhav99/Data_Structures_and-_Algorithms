var greatestLetter = function(s) {
   let arr=s.split("").sort()
   let larger =""
    for(let i=1; i<s.length; i++){
        if(arr[i]>arr[i-1] && arr.includes(arr[i].toUpperCase()) && arr.includes(arr[i].toLowerCase())){
         
                larger=arr[i]
            
        }
    }
    return larger?.toUpperCase()
};


let s= "AbCdEfGhIjK"
console.log(greatestLetter(s))