class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
            return this
        }

        let current = this.root
        while (true) {
            if (val === current.value) return undefined
            if (val < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                } else {
                    current = current.left
                }
            } else if (val > current.value) {
                if (current.right === null) {
                    current.right = newNode
                    return this
                } else {
                    current = current.right
                }
            }
        }
    }

    insertByRecursion(value) {
        const recursion = (node) => {
            if (node === null) {
                return new Node(value)
            }

            if (node.value > value) {
                node.left = recursion(node.left)
            } else if (node.value < value) {
                node.right = recursion(node.right)
            }

            return node
        }

        this.root = recursion(this.root)
    }

    deleteNode(root, value) {
        if (root === null) return root

        if (value < root.value) root.left = this.deleteNode(root.left, value)
        else if (value > root.value) root.right = this.deleteNode(root.right, value)
        else {
            if (root.left === null) return root.right
            else if (root.right === null) return root.left

            root.value = this._getMinValue(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    _getMinValue(node) {
        let minv = node.value
        while (node.left !== null) {
            minv = node.left.value
            node = node.left
        }
        return minv
    }

    find() {
        if (this.root === null) return false
        let current = this.root,
            found = false

        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true
            }
        }

        if (!found) return false

        return current
    }

    findByRecursion(value) {
        const recursion = (root) => {
            if (root === null || root.value === value) {
                return root
            }

            if (root.value < value) {
                return recursion(root.right, value)
            }

            return recursion(root.left, value)
        }

        recursion(this.root)
    }

    bfs() {
        let node = this.root,
            data = [],
            queue = []

        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            data.push(node.value)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }

    dfs_preOrder() {
        const data = []
        const tranverse = (node) => {
            data.push(node.value)
            if (node.left) tranverse(node.left)
            if (node.right) tranverse(node.right)
        }

        tranverse(this.root)
        return data
    }

    dfs_postOrder() {
        const data = []
        const tranverse = (node) => {
            if (node.left) tranverse(node.left)
            if (node.right) tranverse(node.right)
            data.push(node.value)
        }

        tranverse(this.root)
        return data
    }

    dfs_inOrder() {
        const data = []
        const tranverse = (node) => {
            if (node.left) tranverse(node.left)
            data.push(node.value)
            if (node.right) tranverse(node.right)
        }

        tranverse(this.root)
        return data
    }
}

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(7)
tree.insert(26)
tree.insert(28)
tree.insert(17)
tree.insert(18)
tree.insert(5)
tree.insert(8)
tree.insert(1)
tree.insert(6)
// console.log(tree.root)
// console.log(tree.bfs())
console.log(tree.dfs_inOrder())
// tree.delete(1)
// tree.delete(10)
tree.deleteNode(tree.root, 1)
tree.deleteNode(tree.root, 10)
console.log(tree.dfs_inOrder())

// const tree2 = new BinarySearchTree()
// tree2.insertByRecursion(1)
// tree2.insertByRecursion(2)
// tree2.insertByRecursion(3)
// tree2.insertByRecursion(4)
// console.log(tree2.root)
