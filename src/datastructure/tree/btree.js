class BTreeNode {
    constructor(value) {
        this.value = [value]
        this.children = []
    }
}

class BTree {
    constructor() {
        this.root = null
        this.order = 3 // Degree of the B-tree (can be adjusted)
    }

    insert(value) {
        if (!this.root) {
            this.root = new BTreeNode(value)
            return
        }
        this.insertNode(this.root, value)
    }

    insertNode(node, value) {
        if (!node.children.length) {
            node.value.push(value)
            node.value.sort((a, b) => a - b)
            if (node.value.length > this.order - 1) {
                this.split(node)
            }
            return
        }

        let i
        for (i = 0; i < node.value.length; i++) {
            if (value < node.value[i]) {
                this.insertNode(node.children[i], value)
                break
            }
        }
        if (i === node.value.length) {
            this.insertNode(node.children[i], value)
        }
    }

    split(node) {
        const middleIndex = Math.floor(node.value.length / 2)
        const leftNode = new BTreeNode(node.value[middleIndex - 1])
        const rightNode = new BTreeNode(node.value[middleIndex + 1])

        leftNode.children = node.children.slice(0, middleIndex)
        rightNode.children = node.children.slice(middleIndex)

        node.value = [node.value[middleIndex]]
        node.children = [leftNode, rightNode]
    }

    search(value) {
        return this.searchNode(this.root, value)
    }

    searchNode(node, value) {
        if (!node) return false
        let i
        for (i = 0; i < node.value.length; i++) {
            if (value === node.value[i]) return true
            if (value < node.value[i]) break
        }
        return this.searchNode(node.children[i], value)
    }

    find(value) {
        return this.findNode(this.root, value)
    }

    findNode(node, value) {
        if (!node) return null
        let i
        for (i = 0; i < node.value.length; i++) {
            if (value === node.value[i]) return node
            if (value < node.value[i]) break
        }
        return this.findNode(node.children[i], value)
    }

    traversal() {
        this.traverse(this.root)
    }

    traverse(node) {
        if (node) {
            for (let i = 0; i < node.value.length; i++) {
                this.traverse(node.children[i])
                console.log(node.value[i])
            }
            this.traverse(node.children[node.value.length])
        }
    }

    delete(value) {
        this.deleteNode(this.root, value)
    }

    deleteNode(node, value) {
        if (!node) return null

        let i
        for (i = 0; i < node.value.length; i++) {
            if (value === node.value[i]) {
                // Found the value in this node
                if (!node.children.length) {
                    // Leaf node
                    node.value.splice(i, 1)
                    return
                }
                // Non-leaf node
                const predecessor = this.findMax(node.children[i])
                node.value[i] = predecessor
                this.deleteNode(node.children[i], predecessor)
                break
            }
            if (value < node.value[i]) break
        }

        this.deleteNode(node.children[i], value)
    }

    findMax(node) {
        if (!node) return null
        while (node.children.length) {
            node = node.children[node.children.length - 1]
        }
        return node.value[node.value.length - 1]
    }
}

// Example usage:
const btree = new BTree()
btree.insert(10)
btree.insert(20)
btree.insert(5)

btree.traversal() // Before deletion
btree.delete(10)
btree.traversal() // After deletion
