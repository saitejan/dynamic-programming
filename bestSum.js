const bestSum = (targetSum, numbers, cache = { arr: [] }) => {
    if (targetSum in cache) return cache[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null
    let shortestCombination = null;
    for (let num of numbers) {
        let remainder = targetSum - num;
        let remainderResult = bestSum(remainder, numbers, cache)
        if (remainderResult != null) {
            const combination = [...remainderResult, num];
            if(shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination
            }
        }
    }
    cache[targetSum] = shortestCombination
    return shortestCombination
}

console.log(bestSum(50, [1, 2, 4]))
console.log(bestSum(7, [5, 3,7, 4]))
console.log(bestSum(8, [2, 5, 3, 7]))
console.log(bestSum(300, [7, 14]))
// console.log(bestSum(40,100))