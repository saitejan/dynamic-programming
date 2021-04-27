const allConstruct = (targetWord, wordBank, cache = {}) => {
    if (targetWord in cache) return cache[targetWord]
    //checking current target
    if (targetWord === "") return [[]];
    //iterating over wordbank for all word combinations

    let allPossible = []
    for (let word of wordBank) {
        //checking whether target word starts with current word
        if (targetWord.startsWith(word)) {
            let suffixWays = allConstruct(targetWord.slice(word.length), wordBank, cache)
            const targetWays = suffixWays.map(way => [word,...way])
            allPossible.push(...targetWays)
        }
    }
    cache[targetWord] = allPossible
    return allPossible
}


console.log(allConstruct('purple', ['pu', 'p', 'le', 'ur', 'rple']))
console.log(allConstruct('saiteja', ['sa', 'ja', 'teja', 'si', 'eja', 'i']))
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eee',
    'eeeeeeeeee', 'eeeeeeeee', 'eeeeeee', 'eeeeeeeeeeeeeeeeeeeeeeeeeee']))