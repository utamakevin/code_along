const sayInEnglish = require('./say_in_english.js')

// console.log(sayInEnglish(5))

let numbers = [3, 4, 5, 6]

let str = '3,4,5,6'

function commaSeparatedStrToEnglish(numbers) {
    return numbers
    .map(num =>  sayInEnglish(num))
}

// console.log(commaSeparatedStrToEnglish('2,30,40'))

module.exports = commaSeparatedStrToEnglish

// try {
//     commaSeparatedStrToEnglish([2,30,40])

// } catch (e) {}


// two types of errors
    // programmer errors - missing tick, typo
    // operational errors - you expect the error to happen - user call a number that is out of range