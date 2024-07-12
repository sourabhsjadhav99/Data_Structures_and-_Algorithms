var mostCommonWord = function(paragraph, banned) {
    let regex=/[\W]\s/g
    let str = paragraph.toLowerCase().replace(/[^\w\s]/g, "").split(" ") //don't replace words and space

    // let str = paragraph.toLowerCase().split(" ")
    console.log(str)
    let map= new Map()
    for(let i=0;i<str.length; i++){
        map.set(str[i], (map.get(str[i])||0)+1)
    }
    for(let i=0; i<banned.length; i++){
        if(map.has(banned[i])){
            map.delete(banned[i])
        }
    }
    return Array.from(map).sort((a,b)=>b[1]-a[1])[0][0]
    // return Array.from(map)
  
 
};
let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
console.log(mostCommonWord(paragraph, banned))


// const mostCommonWord = (paragraph, banned) => {
//     const words = paragraph.toLowerCase().match(/\w+/g); // Extract words using regex
//     const wordCount = new Map();

//     // Count occurrences of words excluding banned words
//     words.forEach(word => {
//         if (!banned.includes(word)) {
//             wordCount.set(word, (wordCount.get(word) || 0) + 1);
//         }
//     });

//     // Find the most common word
//     let mostCommon = '';
//     let maxCount = 0;
//     wordCount.forEach((count, word) => {
//         if (count > maxCount) {
//             mostCommon = word;
//             maxCount = count;
//         }
//     });

//     return mostCommon;
// };

// const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
// const banned = ["hit"];
// console.log(mostCommonWord(paragraph, banned));