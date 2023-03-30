const yahooFinance = require('yahoo-finance')

yahooFinance.quote("AAPL", (err, quotes) => {
    console.log(quotes)
})