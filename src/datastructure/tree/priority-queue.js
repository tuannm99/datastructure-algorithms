class MaxPriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2) // found parent
            let parent = this.values[parentIdx]

            if (element.priority <= parent.priority) break

            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    // remove root - extractMax
    dequeue() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            // remove last one and replace root
            this.values[0] = end
            this.sinkDown()
        }

        return max
    }

    sinkDown() {
        let idx = 0
        const length = this.values.length,
            element = this.values[0]

        while (true) {
            const leftChildIdx = 2 * idx + 1
            const rightChildIdx = 2 * idx + 2

            let leftChild,
                rightChild,
                swap = null

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx
                }
            }

            if (swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

const er = new MaxPriorityQueue()
er.enqueue('cold', 1)
er.enqueue('ahi', 5)
er.enqueue('tuan', 2)
er.enqueue('tuan', 3)

console.log(er)
er.dequeue()
console.log(er)
