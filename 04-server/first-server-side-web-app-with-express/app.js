const express = require('express')
const app = express()

// configurations
app.set('view engine', 'ejs')


// routes - items on the menu that you can request at maccas

// routes
app.get('/fries', (req, res) => {
    // send is a function of express
    res.send('here are your fries')
})


// routes
app.get('/burger', (req, res) => {
    res.send('here are your burgers')
})

// routes
// making request to a server using the url (address bar)
// http://localhost:3000/hello
// protocol
//      domain
//          port
//              path
//                  query string
// http://localhost:3000/hello?adadfsdfae=sdfse&dfsafd=asdasd&username=kevin


// query string
app.get('/hello', (req, res) => {
    // console.log(req.query)

    // res.send(`hello there ${req.query.username}`)

    res.render('greetings', {name: req.query.username})
})


// route
http://localhost:3000/crappy_calculator?num1=3&num2=4
app.get('/crappy_calculator', (req, res) => {
    let num1 = req.query.num1
    let num2 = req.query.num2
    let total = Number(num1) + Number(num2)
    // when sending number as a request, http thinks it is reading a status code. convert to string to solve
    // res.send(result.toString())
    res.render('result', {sum: total})
}
)


app.listen(3000)