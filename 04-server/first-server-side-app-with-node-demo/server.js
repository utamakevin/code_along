// server - a program that waits and listens for request and give response

// web server - understand http requests and reply with http response

const http = require('http')

// callback signature
function handleRequest(request, response) {

    if(request.url === '/about') {
        response.end('my name is akram')
    } else {
        console.log(request.url)
        response.end(`hello server side development ${new Date()}`)
    }
}


// button.addEventListener('click', handleClick)
// server.addEventListener('request', handleRequest)
const server = http.createServer(handleRequest)

server.listen(8080)