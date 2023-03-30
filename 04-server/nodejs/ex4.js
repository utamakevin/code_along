// lookup an ip address

const dns = require("node:dns") // module system

// callback signature

dns.lookup("example.com", (err, address) => {
    if(!err) {
        console.log(address)
    } else {
        console.log(err)
    }
})