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

    insertByRecusion(value) {
        const recusion = (root) => {
            if (root === null) {
                root = new Node(value)
                return this
            }

            if (root.value > value) {
                root.left = recusion(root.left)
            } else if (root.value < value) {
                root.right = recusion(root.right)
            }

            return this
        }

        recusion(this.root)
    }

    find() {

    }
}

const tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)

console.log(tree)
