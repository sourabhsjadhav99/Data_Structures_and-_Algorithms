
function findMissingNumbers(arr) {
    let hashmap= new Map()
    for(let i=0; i< arr.length; i++){
        if(!hashmap.has(arr[i])){
            hashmap.set(arr[i],1)
    
        }else{
            hashmap.set(arr[i],hashmap.get(arr[i])+1)
        }
    }
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const missing = [];
    for (let i = min; i <= max; i++) {
      if (!hashmap.has(i)) {
        missing.push(i);
      }
    }
    return missing;
  }

  const arr = [2,15, 3, 5, 7, 9];
const missing = findMissingNumbers(arr);
console.log(missing); 