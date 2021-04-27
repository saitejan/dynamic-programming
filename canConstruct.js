const canConstruct = (targetWord,wordBank) => {
    //checking current target
    if(targetWord === "") return true;
    //iterating over wordbank for all word combinations
    for(let word of wordBank) {
        //checking whether target word starts with current word
        if(targetWord.startsWith(word)) {
            if(canConstruct(targetWord.slice(word.length),wordBank)) return true;
        }
    }
    return false
}


console.log(canConstruct('saiteja', ['sa','ja','teja','si','eja','i']))
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','eee',
'eeeeeeeeee','eeeeeeeee','eeeeeee','eeeeeeeeeeeeeeeeeeeeeeeeeee']))