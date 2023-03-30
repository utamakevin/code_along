const http = require('http')
const fs = require('fs')

function handleRequest(req, res) {
    let filename = req.url.slice(1)
    console.log(filename)

    fs.readFile(filename, 'utf-8', (err, file) => {
        if(err) {
            res.end("file not found")
        } else {
            res.end(file)
        }
    })
}

const server = http.createServer(handleRequest)

server.listen(3000)