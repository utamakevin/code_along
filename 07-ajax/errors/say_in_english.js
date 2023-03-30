function sayInEnglish(num) {
    if(num < 0 || num > 7) {
        throw new Error(`${num} is out of range`)
    }

    return 'zero one two three four five six seven'.split(' ')[num]
}

module.exports = sayInEnglish

// console.log(sayInEnglish(10))