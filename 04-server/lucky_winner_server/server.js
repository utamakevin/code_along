const express = require('express')
const _ = require('underscore')
const port = 3000
const app = express()

const names = ["Akram Mansour", "Amal Prasad", "Aung Thiha", "Bilal Foggi", "Caleb Love", "Deepa Saini", "Deepali Patro", "Dimitri Nossar", "Elmira Alimohammadi", "Falko Kammel", "Frances Lozada", "Henry Rennel", "Iffath", "Jack Hamblin", "Kevin Utama", "Leon Yu", "Maria Valentina Gottardello", "Mike Tharratt", "Mindy Nam", "Mohammed T Ali", "Nikki Pham", "Stefanus", "Tales Pinto", "Tom Nicholas", "Whoopi Hutman"] 

app.get('/', (req, res) => {
    res.send(_.sample(names))
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})