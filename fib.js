const fib = (n, cache = {}) => {

    if (n in cache) return cache[n]
    if (n <= 2) return 1
    cache[n] = fib(n - 1, cache) + fib(n - 2, cache)
    return cache[n]
}

console.log(fib(50))
console.log(fib(7))
console.log(fib(100))