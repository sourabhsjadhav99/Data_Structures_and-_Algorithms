function isMultipleOfFive(n) {
    if(n===5 || n>9){
        if(n%5===0){
            return true
        }else{
            while(n>9){
                let reminder = n%10
            if(reminder%5===0){
                return true
            }else{
                n=parseInt(n/10)
            }

            }
        }
    }
    return false
}