/**
 * Check if have queens in vertical line of queen.
 * 
 * @param {number} n 
 * @param {number} x 
 * @param {number} y 
 * @param {object} queen
 * @return {boolean} 
 */
const inVerticalLine = (n, x, y, queen) => {
    for (let i = 0; i < n; i++) {
      if (queen.x === x + i && queen.y === y + i) {
        return true
      }
      if (queen.x === x + i && queen.y === y - i) {
        return true
      }
      if (queen.x === x - i && queen.y === y - i) {
        return true
      }
      if (queen.x === x - i && queen.y === y + i) {
        return true
      }
    }
    return false
}

/**
 * Check if can add queen in coord x,y.
 * 
 * @param {number} n 
 * @param {number} x 
 * @param {number} y 
 * @param {object[]} queens 
 */
const canAddQueen = (n, x, y, queens) => {
    const sideQueens = queens.filter(queen => 
        queen.x === x ||
        queen.y === y ||
        (
            (queen.x === x + 1 || queen.x === x - 1) &&
            (queen.y === y + 1 || queen.y === y - 1)
        ) ||
        inVerticalLine(n, x, y, queen)
    )
    return !sideQueens.length
}

/**
 * Get next coord to place queen.
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} n
 * @return {object|null} 
 */
const getNextCoord = (x, y, n) => {
    if (x < n - 1) {
        return { x: x + 1, y }
    }
    if (y < n - 1) {
        return { x: 0, y: y + 1 }
    }
    return null
}

/**
 * Generate array with coords of all queens posibility.
 * 
 * @param {number} n
 * @return {object[]} 
 */
const getQueensMap = (n) => {
    let x = y = 0
    let queens = []
    const maps = []

    while (true) {
        if (canAddQueen(n, x, y, queens)) {
            queens.push({ x, y })
        }
        if (queens.length === n) {
            maps.push([...queens])
            queens.pop()
        }
        let newCoord = getNextCoord(x, y, n)
        if (!newCoord) {
            let lastAddedQueen = queens.pop()
            if (!lastAddedQueen) {
                break
            }
            if (lastAddedQueen.x === n - 1 && lastAddedQueen.y === n - 1) {
                lastAddedQueen = queens.pop()
            }
            if (!lastAddedQueen) {
                break
            }
            newCoord = getNextCoord(lastAddedQueen.x, lastAddedQueen.y, n)
        }
        x = newCoord.x
        y = newCoord.y
    }

    return maps
}

/**
 * Render queens map in console.
 * 
 * @param {number} n 
 * @param {object[]} queens 
 * @return {void}
 */
const renderQueens = (n, queens) => {
    let renderStr = ''
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            const queen = queens.find(q => q.x === x && q.y === y)
            if (queen) {
                renderStr += 'Q'
            } else {
                renderStr += '-'
            }
            renderStr += ' '
        }
        renderStr += '\n'
    }
    console.log(renderStr)
}

const queensMap = getQueensMap(8)

queensMap.forEach(queens => {
    renderQueens(8, queens)
})
