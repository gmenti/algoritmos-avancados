/**
 * Get biggest number.
 * 
 * @param {number} a 
 * @param {number} b
 * @return {number} 
 */
const max = (a, b) => a > b ? a : b

/**
 * 
 * @param {number} capacity 
 * @param {number[]} weigths 
 * @param {number[]} values 
 * @param {number} n
 * @return {number} 
 */
let mochilaBRecCount = 0
const mochilaBRec = (capacity, weigths, values, n) => {
    mochilaBRecCount++
    if (n === 0 || capacity === 0) {
        return 0
    }
    if (weigths[n - 1] > capacity) {
        return mochilaBRec(capacity, weigths, values, n - 1)
    }
    const a = values[n - 1] + mochilaBRec(capacity - weigths[n - 1], weigths, values, n - 1)
    const b = mochilaBRec(capacity, weigths, values, n - 1)
    return max(a, b)
}

/**
 * Create knapsack.
 * 
 * @param {number} n
 * @return {array[]}
 */
const createKnap = (n) => {
    const knap = []
    for (let i = 0; i <= n; i++) {
        knap[i] = []
    }
    return knap
}

let mochilaDinamicaCount = 0
const mochilaDinamica = (capacity, weights, values, n) => {
    const knap = createKnap(n)

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= capacity; j++) {
            mochilaDinamicaCount++
            if (i === 0 || j === 0) {
                knap[i][j] = 0
            } else if (weights[i - 1] <= j) {
                knap[i][j] = max(values[i - 1] + knap[i - 1][j - weights[i - 1]], knap[i - 1][j])
            } else {
                knap[i][j] = knap[i - 1][j]
            }
        }
    }

    return knap[n][capacity]
}

const brecResult = mochilaBRec(50, [10, 20, 30], [60, 100, 120], 3)
console.log(`Mochila BRec teve resultado de ${brecResult} com ${mochilaBRecCount} iterações.`)

const dynamicResult = mochilaDinamica(50, [10, 20, 30], [60, 100, 120], 3)
console.log(`Mochila dinamica teve resultado de ${dynamicResult} com ${mochilaDinamicaCount} iterações.`)
