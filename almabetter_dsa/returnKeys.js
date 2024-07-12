function getObjectKeysES5(obj) {
    return function(){
        return Object.keys(obj)
    }
}
console.log(getObjectKeysES5({"name": "John", "age": 25, "city": "New York"}))