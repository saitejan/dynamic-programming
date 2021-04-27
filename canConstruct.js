const canConstruct = (targetWord, wordBank, cache = {}) => {
    if (targetWord in cache) return cache[targetWord]
    //checking current target
    if (targetWord === "") return true;
    //iterating over wordbank for all word combinations
    for (let word of wordBank) {
        //checking whether target word starts with current word
        if (targetWord.startsWith(word)) {
            if (canConstruct(targetWord.slice(word.length), wordBank,cache)) {
                cache[targetWord] = true
                return true;
            }
        }
    }
    cache[targetWord] = false
    return false
}


console.log(canConstruct('saiteja', ['sa', 'ja', 'teja', 'si', 'eja', 'i']))
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eee',
    'eeeeeeeeee', 'eeeeeeeee', 'eeeeeee', 'eeeeeeeeeeeeeeeeeeeeeeeeeee']))