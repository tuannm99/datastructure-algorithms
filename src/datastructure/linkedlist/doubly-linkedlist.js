class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // add last
    push(val) {
        const newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.length++
        return this
    }

    // remove last
    pop() {
        if (!this.head) return undefined
        let poppedNode = this.tail

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }

        this.length--
        return poppedNode
    }

    // remove first
    shift() {
        if (!this.head) return undefined
        let head = this.head

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = head.next
            this.head.prev = null
            head.next = null
        }
        this.length--
        return head
    }

    // add first
    unshift(val) {
        const node = new Node(val)

        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.length++

        return this
    }

    // get node from position
    get(index) {
        if (index < 0 || index >= this.length) return null

        if (index <= this.length / 2) {
            // from head
            let count = 0
            let current = this.head

            while (count != index) {
                current = current.next
                count++
            }

            return current
        } else {
            // from tail
            let count = this.length - 1
            let current = this.tail

            while (count != index) {
                current = current.prev
                count--
            }

            return current
        }
    }

    // update item at position
    set(index, val) {
        const found = this.get(index)
        if (found != null) {
            found.val = val
            return true
        }

        return false
    }

    // add node to a position
    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(val)
        if (index === this.length) return !!this.push(val)

        const node = new Node(val)
        const before = this.get(index - 1)
        const after = before.next

        before.next = node
        node.prev = before

        node.next = after
        after.prev = node

        this.length++

        return true
    }

    // remove node at position
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        const removeNode = this.get(index)
        removeNode.prev.next = removeNode.next
        removeNode.next.prev = removeNode.prev

        removeNode.next = null
        removeNode.prev = null

        this.length--

        return removeNode
    }

    toArray() {
        const arr = []
        var current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
        return arr
    }

    traverse() {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }
}

const list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)

list.traverse()
