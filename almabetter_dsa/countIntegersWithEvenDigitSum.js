var countEven = function(num) {
    let count =0
for(let i=2; i<=num; i++){
    let sum =0
    let temp=i
    while(temp>0){
        let reminder = temp%10
        sum=sum+reminder
        temp=parseInt(temp/10)
    }
    if(sum%2===0){
        count++
    }

}
return count
};