const countConstruct = (targetWord, wordBank) => {
    //checking current target
    if (targetWord === "") return 1;
    //iterating over wordbank for all word combinations
    let totalWays = 0
    for (let word of wordBank) {
        //checking whether target word starts with current word
        if (targetWord.startsWith(word)) {
            const numberOfWay = countConstruct(targetWord.slice(word.length), wordBank)
            totalWays += numberOfWay
        }
    }
    return totalWays
}


console.log(countConstruct('saiteja', ['sa', 'ja', 'teja', 'si', 'eja', 'i']))
console.log(countConstruct('purple', ['pu', 'p', 'le', 'ur', 'rple']))
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eee',
    'eeeeeeeeee', 'eeeeeeeee', 'eeeeeee', 'eeeeeeeeeeeeeeeeeeeeeeeeeee']))