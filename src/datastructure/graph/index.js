class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1)
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }

        delete this.adjacencyList[vertex]
    }

    depthFirstRecursive(start) {
        const result = []
        const visited = {}

        const adj = this.adjacencyList
        const dfs = (vertex) => {
            if (!vertex) return null
            visited[vertex] = true
            result.push(vertex)

            adj[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        }

        dfs(start)
        return result
    }

    depthFirstIteration(start) {
        const stack = [start]
        const result = []
        const visited = {}

        let current
        visited[start] = true

        while (stack.length) {
            current = stack.pop()
            result.push(current)

            this.adjacencyList[current].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }

        return result
    }

    breadthFirst(start) {
        const queue = [start]
        const result = []
        const visited = {[start]: true}
        let current
        while (queue.length) {
            current = queue.shift()
            result.push(current)

            this.adjacencyList[current].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }

        return result
    }
}

const g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

console.log(g.depthFirstRecursive('A'))
console.log(g.depthFirstIteration('A'))
console.log(g.breadthFirst('A'))
