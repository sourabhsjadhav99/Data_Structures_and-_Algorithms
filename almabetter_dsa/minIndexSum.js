var findRestaurant = function (list1, list2) {
    let map = new Map()
    for (let i = 0; i < list2.length; i++) {
        map.set(list2[i], i)
    }
    let addIndexArr = []
    let addIndex = Infinity
    for (let i = 0; i < list1.length; i++) {
        if (map.has(list1[i])) {
            let add = i + map.get(list1[i])
            if (add === addIndex) {
                addIndexArr.push(list1[i])
            }else if (add < addIndex) {
                addIndexArr=[list1[i]]
                addIndex = add
            }  
        }
    }
    return addIndexArr

};
let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"], list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
console.log(findRestaurant(list1, list2))

