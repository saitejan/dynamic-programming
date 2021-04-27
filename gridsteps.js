const steps = (m, n, cache = {}) => {
    let key = m + ',' + n
    let key1 = n + ',' + m
    if (key in cache) return cache[key]
    if (key1 in cache) return cache[key1]
    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0
    cache[key] = steps(m - 1, n, cache) + steps(m, n - 1, cache)
    return cache[key]
}

console.log(steps(3,2))
console.log(steps(1,1))
console.log(steps(40,100))