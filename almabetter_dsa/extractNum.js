function extractNumbers(str) {
    let regex=/[\d\.]{1,}/g
    let arr= str.match(regex)
    return arr.map(Number)
  }
  console.log(extractNumbers("The price of 20 the product is $250.50"))

// function isValidURL(url) {
//    let regex=/^[(https:\/\/www\.)][\w]{1,}[\.com]$/
//   }
//   console.log(isValidURL("https://www.example.com"))

console.log(0%5)