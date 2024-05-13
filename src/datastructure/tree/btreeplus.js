class BPlusTreeNode {
    constructor() {
        this.keys = []
        this.children = []
    }
}

class BPlusTree {
    constructor() {
        this.root = null
        this.order = 4 // Degree of the B+tree (can be adjusted)
    }

    insert(value) {
        if (!this.root) {
            this.root = new BPlusTreeNode()
            this.root.keys.push(value)
            this.root.children.push(null)
            this.root.children.push(null)
            return
        }
        this.insertNode(this.root, value)
    }

    insertNode(node, value) {
        if (!node.children.length) {
            node.keys.push(value)
            node.keys.sort((a, b) => a - b)
            if (node.keys.length > this.order - 1) {
                this.split(node)
            }
            return
        }

        let i
        for (i = 0; i < node.keys.length; i++) {
            if (value < node.keys[i]) {
                this.insertNode(node.children[i], value)
                break
            }
        }
        if (i === node.keys.length) {
            this.insertNode(node.children[i], value)
        }
    }

    split(node) {
        const middleIndex = Math.floor(node.keys.length / 2)
        const rightKeys = node.keys.splice(middleIndex)
        const rightChildren = node.children.splice(middleIndex + 1)

        const newRightNode = new BPlusTreeNode()
        newRightNode.keys = rightKeys
        newRightNode.children = rightChildren

        const newParent = new BPlusTreeNode()
        newParent.keys.push(node.keys.pop())
        newParent.children.push(node)
        newParent.children.push(newRightNode)

        node = newParent
    }

    search(value) {
        return this.searchNode(this.root, value)
    }

    searchNode(node, value) {
        if (!node) return false
        let i
        for (i = 0; i < node.keys.length; i++) {
            if (value === node.keys[i]) return true
            if (value < node.keys[i]) break
        }
        return this.searchNode(node.children[i], value)
    }

    find(value) {
        return this.findNode(this.root, value)
    }

    findNode(node, value) {
        if (!node) return null
        let i
        for (i = 0; i < node.keys.length; i++) {
            if (value === node.keys[i]) return node
            if (value < node.keys[i]) break
        }
        return this.findNode(node.children[i], value)
    }

    traversal() {
        this.traverse(this.root)
    }

    traverse(node) {
        if (node) {
            let i
            for (i = 0; i < node.keys.length; i++) {
                this.traverse(node.children[i])
                console.log(node.keys[i])
            }
            this.traverse(node.children[i])
        }
    }

    delete(value) {
        this.deleteNode(this.root, value)
    }

    deleteNode(node, value) {
        if (!node) return null

        let i
        for (i = 0; i < node.keys.length; i++) {
            if (value === node.keys[i]) {
                node.keys.splice(i, 1)
                return
            }
            if (value < node.keys[i]) break
        }

        this.deleteNode(node.children[i], value)
    }
}

// Example usage:
const bplustree = new BPlusTree()
bplustree.insert(10)
bplustree.insert(20)
bplustree.insert(5)

bplustree.traversal() // Before deletion
bplustree.delete(10)
bplustree.traversal() // After deletion
