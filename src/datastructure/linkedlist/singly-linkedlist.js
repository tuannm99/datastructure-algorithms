class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
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
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    // remove last
    pop() {
        if (!this.head) return undefined

        let [current, newTail] = [this.head, this.head]

        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return current
    }

    // remove first
    shift() {
        if (!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead
    }

    // add first
    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    // get node from position
    get(index) {
        if (index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while (counter !== index) {
            current = current.next
            counter++
        }
        return current
    }

    // update item at position
    set(index, val) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        }

        return false
    }

    // add node to a position
    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.push(val)
        if (index === 0) return !!this.unshift(val)

        const newNode = new Node(val)
        let prev = this.get(index - 1)

        let tmp = prev.next
        prev.next = newNode
        newNode.next = tmp

        this.length++
        return true
    }

    // remove node at position
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let previousNode = this.get(index - 1)
        let removed = previousNode.next
        previousNode.next = removed.next

        this.length--
        return removed
    }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node

        let next,
            prev = null // tail need to be null
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
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

const linkedlist = new SinglyLinkedList()
linkedlist.push('Hi')
linkedlist.push('there')
linkedlist.push('how')
linkedlist.push('are')
linkedlist.push('you')
// console.log(linkedlist.get(2))
// console.log(linkedlist.get(4))
// console.log(linkedlist.get(1))
linkedlist.traverse()
