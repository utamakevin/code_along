// const https = require('https')

// https.get('https://omdbapi.com/?apikey=2f6435d9&t=jaws', res => {
//     let str = ''

//     res.on('data', chunk => {
//         // chunks.push(chunk)
//         str += chunk.toString()
//     })

//     res.on('end', () => {
//         console.log(JSON.parse(str).Title)
//         console.log('got everything')
//     })
// })

// js does not wait for the process to finish before moving on on these calls. async.

    // const omdbWrapper = require('omdb-api-search')
    // const omdb = omdbWrapper.createClient('2f6435d9')

    // omdb.findOneByTitle('jaws', (err, res) => {
    //     console.log(res.Plot)
    // })
    // omdb.findOneByTitle('interstellar', (err, res) => {
    //     console.log(res.Plot)
    // })
    // omdb.findOneByTitle('rubber', (err, res) => {
    //     console.log(res.Plot)
    // })

const axios = require('axios')

// axios.get('https://omdbapi.com/?apikey=2f6435d9&t=jaws').then(res => {
//     // console.log(res.data.Plot)
//     // console.log(res.headers['content-type'])
//     console.log(res.data.Plot)
// })

// axios.get('https://omdbapi.com/?apikey=2f6435d9&t=interstellar').then(res => {
//     console.log(res.data.Plot)
// })

// axios.get('https://omdbapi.com/?apikey=2f6435d9&t=rubber').then(res => {
//     console.log(res.data.Plot)
// })



// promise chaining - to get things in order

// axios
//     .get(url)
//     .then(step1)
//     .then(step2)
//     .then(step3)
//     .then(step4)

// axios
//     .get('https://omdbapi.com/?apikey=2f6435d9&t=jaws')
//     .then(res => {
//         console.log(res.data.Plot)
//         return axios.get('https://omdbapi.com/?apikey=2f6435d9&t=interstellar')
//     })
//     .then(res => {
//         console.log(res.data.Plot)
//         return axios.get('https://omdbapi.com/?apikey=2f6435d9&t=rubber')
//     })
//     .then(res => {
//         console.log(res.data.Plot)
//     })


