const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/donate', (req, res) => {
    res.send('asdasd')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})