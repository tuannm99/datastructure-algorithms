/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    const sorted = deck.sort((a, b) => b - a)

    let result = []

    while (sorted.length > 0) {
        if (result.length <= 1) {
            result = [sorted.shift(), ...result]
        } else {
            result = [sorted.shift(), result.pop(), ...result]
        }
    }

    return result
}
