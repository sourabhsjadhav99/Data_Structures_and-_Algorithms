function printFruitsByFrequency(fruits) {
    let map= new Map()
    for(let i=0;i<fruits.length; i++){
        map.set(fruits[i], (map.get(fruits[i])||0)+1)
    }
    return Array.from(map).sort((a,b)=>b[1]-a[1]).map(([a,b])=>a)


  }
  let fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'cherry', 'cherry']
  console.log(printFruitsByFrequency(fruits))