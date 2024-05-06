class HashTable {
    constructor(size = 100) {
        this.keyMap = new Array(size)
    }

    set(key, value) {
        let index = this._hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this._hash(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (keymap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }

        return undefined
    }

    values() {
        let arr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!arr.includes(this.keyMap[i][j[1]])) {
                        arr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return arr
    }

    keys() {
        let arr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!arr.includes(this.keyMap[i][j[0]])) {
                        arr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return arr
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 8781

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }

        return total
    }
}
