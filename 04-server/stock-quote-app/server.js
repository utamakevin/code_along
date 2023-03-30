const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const yahooFinance = require('yahoo-finance')
const app = express()
const port = 3000
const fs = require('fs')

let list = []

// client server architecture

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(expressLayouts) // express convention

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/popular', (req, res) => {
   
   let tickers = [
    {name: 'Microsoft', ticker: 'msft'},
    {name: 'Google', ticker: 'googl'},
    {name: 'Tesla', ticker: 'tsla'},
    {name: 'Apple', ticker: 'aapl'},
    {name: 'Gamestop', ticker: 'gme'},
   ]

    res.render('popular', { tickers: tickers })
})

// query strings goes inside an object named query
// req.query = {ticker: "googl"}
app.get('/stock', (req,res) => {
    yahooFinance.quote(req.query.ticker, (err, quotes) => {
        let price = quotes.price.regularMarketPrice
        let name = quotes.price.longName

        // console.log(quotes)
        res.render('quote', { companyName: name, price: price })
    })
})

app.get('/stock/new', (req, res) => {
    res.render("add_new_stock")
})

app.get('/new_stock_lists', (req, res) => {
    let newTicker = req.query.ticker
    list.push(newTicker)
    console.log(list)
    fs.appendFileSync('stuff', `${newTicker}\n`)
    // res.send(list.join(", "))
    res.redirect('/ticker_list')
})

app.get('/ticker_list', (req, res) => {
    // read our secret stuff file
    // decide how and what to show client
    const file = fs.readFileSync('stuff', 'utf-8')
    const lines = file.split('\n')

    

    res.render('ticker_list', { tickers: lines })
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})