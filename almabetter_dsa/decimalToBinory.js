const  find = function(decimal_number){
    let binory=""
    while(decimal_number>0){
        let remainder = decimal_number%2
        binory=remainder+binory
        decimal_number=parseInt(decimal_number/2)

    }
   return binory
};

console.log(find(10))