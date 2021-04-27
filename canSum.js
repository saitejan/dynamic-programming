const canSum = (targetSum, numbers, cache = {}) => {
    if (targetSum in cache) return false
    if (targetSum === 0) return true
    if (targetSum < 0) return false
    for(let num of numbers) {
        let remainder = targetSum - num;
        if(canSum(remainder,numbers,cache)) {
            // cache[targetSum] = true
            return true;
        }
    }
    cache[targetSum] = false
    return false
}

console.log(canSum(3,[1,2]))
console.log(canSum(7,[7,5,4,3,7]))
console.log(canSum(300,[7,14]))
// console.log(canSum(40,100))