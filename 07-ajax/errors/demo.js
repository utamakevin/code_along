const sayInEnglish = require('./say_in_english.js')

// console.log(sayInEnglish(5))

let numbers = [3, 4, 5, 6]

let str = '3,4,5,6'

function commaSeparatedStrToEnglish(str) {
    
    return str.split(',').map(num => sayInEnglish(num))
}

// console.log(commaSeparatedStrToEnglish(str))



module.exports = commaSeparatedStrToEnglish