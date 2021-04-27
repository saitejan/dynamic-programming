const fibTabular = n => {
    let arr = Array(n + 1).fill(0)
    arr[1] = 1
    for (let i = 1; i < n; i++) {
        arr[i + 1] += arr[i]
        arr[i + 2] += arr[i]
    }
    return arr[n]
}

console.log(fibTabular(50))
console.log(fibTabular(7))
console.log(fibTabular(100))