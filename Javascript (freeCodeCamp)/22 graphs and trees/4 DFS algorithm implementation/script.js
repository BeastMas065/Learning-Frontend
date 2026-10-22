
const dfs = (graph, root) => {
  const result = []
  let current = root
  const visited = [root]
  const path = []

  result.push(root)

  while (visited.length < graph.length) {
    let found = false

    for (let i = 0; i < graph[current].length; i++) {
      if (graph[current][i] === 1 && !visited.includes(i)) {
        path.push(current)
        current = i
        visited.push(i)
        result.push(i)
        found = true
        break
      }
    }

    if (!found) {
      if (path.length === 0) break
      current = path.pop()
    }
  }

  return result
}

console.log(dfs([
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
], 1))
