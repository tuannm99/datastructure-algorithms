// stack implementation by linkedlist
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        const node = new Node(val)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            let tmp = this.first
            this.first = node
            this.first.next = tmp
        }

        return ++this.size
    }

    pop() {
        if (!this.first) return null
        let tmp = this.first

        if (this.first === this.last) {
            this.last = null
        }

        this.first = this.first.next
        this.size--

        return tmp.value
    }
}
