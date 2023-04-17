const express = require('express')
const app = express()

app.get('/api/colors', (req, res) => {
    res.json(['red', 'green', 'mistyrose', 'blue'])
})

app.listen(8080, () => console.log('server running'))