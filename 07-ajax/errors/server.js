const express = require('express')
const app = express()
const commaSeparatedStrToEnglish = require('./comma_separated_str_to_english')

app.get('/convert/:numbers', (req, res) => {
    let numbers = req.params.numbers.split(",")
//   try {
    let english = commaSeparatedStrToEnglish(numbers)
    res.send(english.join(", "))
//   } catch (err) {
//     console.log(err.name)
//     console.log(err.message)
//     console.log(err.stack)
//     res.send("oops... " + err.message)
//   }
})

app.listen(3000)