function isPalindrome(str) {
    let mod= str.toLowerCase().replace(/\W/g, "")
    return mod===mod.split("").reverse().join("")
  }
  console.log(isPalindrome("race car"))