var toGoatLatin = function(sentence) {
    let vowels=["a", "e", "i", "o", "u"]
    sentence = sentence.split(" ")
    let str =[]
    for(let i=0; i<sentence.length; i++){
        if(vowels.includes(sentence[i][0].toLocaleLowerCase())){
            str.push(`${sentence[i]}ma${add_a(i)}`) 

        }else{
            let first_letter=sentence[i][0]
            let word=sentence[i].slice(1)
            str.push(`${word}${first_letter}ma${add_a(i)}`)
        }
    }
    
    function add_a(i){
        let str_a=""
        for(let j=0; j<i+1; j++){
            str_a=str_a+"a"
        }
        return str_a
    }
    return str.join(" ")
};
let sentence="I speak Goat Latin"
console.log(toGoatLatin(sentence))