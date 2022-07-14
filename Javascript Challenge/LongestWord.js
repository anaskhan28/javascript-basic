function findLongestWord(str){
let words = str.split(" ");
console.log(words)
let longest = "";
for(let word of words){
    if(word.length> longest.length){
        longest = word;
    }
    
}
console.log(longest )

}
findLongestWord("Hey everyone my name is Anas Khan pursuing Computer Engineering from GPM");