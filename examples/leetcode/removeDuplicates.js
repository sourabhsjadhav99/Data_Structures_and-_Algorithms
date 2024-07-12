var removeDuplicates = function(nums) {
    // let map = new map()
    let arr=[]
    let temp =[...nums]
    for (let i=0; i< nums.length; i++){
        if(!arr.includes(nums[i])){
            arr.push(nums[i])
        }
         else{
            temp.splice(i,1)
            temp.push("_")
        }

    }
    
    return [temp, arr]
    
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))