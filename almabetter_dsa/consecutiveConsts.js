function isEasyToPronounce(s) {
    let vowels =["a","e","i", "o", "u"]
    let count=0
    for (let i=0; i<s.length; i++){
        if(!vowels.includes(s[i])){
            count=count+1

        }
    }
    return count>=4?"NO":"YES"
  }
  console.log(isEasyToPronounce( "tryst"))