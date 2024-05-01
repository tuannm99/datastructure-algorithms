const t = require('')
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
    shift() {}

    // add first
    unshift() {}

    // get node from position
    get(index) {}

    // update item at position
    set(index, val) {}

    // add node to a position
    insert(index, val) {}

    // remove node at position
    remove(index) {}

    reverse() {}

    toArray() {}
}
