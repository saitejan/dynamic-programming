const howSum = (targetSum, numbers, cache = { arr: [] }) => {
    if (targetSum in cache) return cache[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null
    for (let num of numbers) {
        let remainder = targetSum - num;
        let remainderResult = howSum(remainder, numbers, cache)
        if (remainderResult != null) {
            // cache.arr.push(num)            
            cache[targetSum] = [...remainderResult, num];
            return cache[targetSum]
        }
    }
    // cache.arr=[]
    cache[targetSum] = null
    return null
}

console.log(howSum(50, [1, 2, 4]))
console.log(howSum(7, [5, 3, 4, 7]))
console.log(howSum(8, [2, 5, 3, 7]))
console.log(howSum(300, [7, 14]))
// console.log(howSum(40,100))