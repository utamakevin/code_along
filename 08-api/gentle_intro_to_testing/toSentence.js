function toSentence(fruits) {
    if(fruits.length < 2) {
        return fruits.join('')
    } else {
        // let last = fruits.pop()
        return `${fruits.slice(0, -1).join(', ')} and ${fruits.at(- 1)}`
    }
}

module.exports = toSentence