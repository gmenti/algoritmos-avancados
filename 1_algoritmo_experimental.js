/**
 * A função pow1 é Theta(n).
 * 
 * @param {number} a 
 * @param {number} n
 * @return {number} 
 */
const pow1 = (a, n) => {
    let p = 1
    for (let i = 0; i < n; i++) {
        p = p * a
    }
    return p
}

console.log('pow1 2, 4, 8, 16', [
    // Realiza 2 iterações para n = 2
    pow1(2, 2),
    
    // Realiza 4 iterações para n = 4
    pow1(2, 4),

    // Realiza 8 iterações para n = 8
    pow1(2, 8),
    
    // Realiza 16 iterações para n = 16
    pow1(2, 16)
])

/**
 * A função pow2 é Theta(4n - 1)
 * 
 * @param {number} a 
 * @param {number} n
 * @return {number} 
 */
const pow2 = (a, n) => {
    if (n === 0) {
        return 1
    }
    if (n % 2 === 0) {
        return pow2(a, n / 2) * pow2(a, n / 2)
    }
    return pow2(a, (n - 1) / 2) * pow2(a, (n - 1) / 2) * a
}

console.log('pow2 2, 4, 8, 16', [
    // Realiza 7 iterações para n = 2
    pow2(2, 2),

    // Realiza 15 iterações para n = 4
    pow2(2, 4),

    // Realiza 31 iterações para n = 8
    pow2(2, 8),
    
    // Realiza 63 iterações para n = 16
    pow2(2, 16)
])

/**
 * A função fibonacci é Oh(2^n)
 *  
 * @param {number} n
 * @return {number}
 */
const fibonacci = n => {
    if (n <= 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log('fibonacci 2, 4, 8, 16', [
    // Realiza 3 iterações para n = 2
    fibonacci(2),

    // Realiza 9 iterações para n = 4
    fibonacci(4),

    // Realiza 67 iterações para n = 8
    fibonacci(8),
    
    // Realiza 3193 iterações para n = 16
    fibonacci(16)
])

/**
 * A função lookupFibo é Theta(2n - 1)
 * 
 * @param {number[]} f 
 * @param {number} n
 * @return {number}
 */
const lookupFibo = (f, n) => {
    if (f[n] >= 0) {
        return f[n]
    }
    if (n <= 1) {
        f[n] = n
    } else {
        f[n] = lookupFibo(f, n - 1) + lookupFibo(f, n - 2)
    }
    return f[n]
}

const memorizedFibo = (n) => {
    const f = []
    for (let i = 0; i < n; i++) {
        f[i] = -1
    }
    return lookupFibo(f, n)
}

console.log('memorizedFibo 2, 4, 8, 16', [
    // Realiza 3 iterações para n = 2
    memorizedFibo(2),

    // Realiza 7 iterações para n = 4
    memorizedFibo(4),

    // Realiza 15 iterações para n = 8
    memorizedFibo(8),
    
    // Realiza 31 iterações para n = 16
    memorizedFibo(16)
])
