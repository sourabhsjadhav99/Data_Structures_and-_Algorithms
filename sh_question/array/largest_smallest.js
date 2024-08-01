function largest_and_smallest_number(arr){
let largest= -Infinity, smallest=Infinity
    for (let elm of arr){
        largest = Math.max(largest, elm)
        smallest=Math.min(smallest,elm )

    }
return [largest,smallest]
}
console.log(largest_and_smallest_number([22, 14, 8, 17, 35, 3]))