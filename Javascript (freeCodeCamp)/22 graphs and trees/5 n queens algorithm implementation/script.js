
const dfsNQueens = n => {
  if (n < 1) return []

  const solutions = []
  const queens = []

  const dfs = row => {
    if (row === n) {
      solutions.push([...queens])
      return
    }

    for (let col = 0; col < n; col++) {
      let safe = true

      for (let prevRow = 0; prevRow < row; prevRow++) {
        const prevCol = queens[prevRow]

        if (
          prevCol === col ||
          Math.abs(prevRow - row) === Math.abs(prevCol - col)
        ) {
          safe = false
          break
        }
      }

      if (safe) {
        queens.push(col)
        dfs(row + 1)
        queens.pop()
      }
    }
  }

  dfs(0)
  return solutions
}
