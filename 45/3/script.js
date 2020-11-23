function wordCount (text){
    var wordsSoFar = 0;
    for (var x = 0; x < wordCount.length; x++)
        if (text(x) === " ") {
            wordsSoFar = +1;
        }
        wordsSoFar += 1;
}

console.log(wordCount("foo"))               
console.log(wordCount("Jag älskar chips"))  
console.log(wordCount("God natt!"))

