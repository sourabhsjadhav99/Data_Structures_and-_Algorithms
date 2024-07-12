function parseJSON(jsonString) {
    return JSON.parse(JSON.stringify(jsonString))

}
let jsonString = {"colors": ["red", "green", "blue"], "length": 3}
console.log(JSON.parse(jsonString))
