// make request to omdb api using axios
// requesting rubber, jaws, interstellar in order

const axios = require('axios')

// axios
// .get('https://omdbapi.com/?apikey=2f6435d9&t=rubber')
// .then(res => {
//     console.log(res.data.Plot)
//     return axios.get('https://omdbapi.com/?apikey=2f6435d9&t=jaws')
// })
// .then(res => {
//     console.log(res.data.Plot)
//     return axios.get('https://omdbapi.com/?apikey=2f6435d9&t=interstellar')
// })
// .then(res => {
//     console.log(res.data.Plot)
// })

// console.log('me first')


// make request to omdb api using axios - using the s=title query string to search for jaws, it should return a list of movies
// using the response from the first request, make 3 more requests to get the plot of the first three movies

// axios
// .get('https://omdbapi.com/?apikey=2f6435d9&s=jaws')
// .then(res => {
//     // console.log(res.data)
//     return res.data
// })
// .then(res => {
//     // console.log(res.Search[0])
//     // console.log(res.Search[1])
//     // console.log(res.Search[2])
//     return axios.get(`https://omdbapi.com/?apikey=2f6435d9&t=${res.Search[0].Title}`)
// })
// .then(res => {
//     console.log(res.data.Plot)
//     return axios.get(`https://omdbapi.com/?apikey=2f6435d9&t=${res.Search[1].Title}`)
// })
// .then(res => {
//     console.log(res.data.Plot)
//     return axios.get(`https://omdbapi.com/?apikey=2f6435d9&t=${res.Search[2].Title}`)
// })
// .then(() => {
//     console.log(res.data.Plot)
// })


axios
.get('https://omdbapi.com/?apikey=2f6435d9&s=jaws')
.then(res => {
    let ids = res.data.Search.map(movie => movie.imdbID).slice(0, 3)

    let p1 = axios.get('https://omdbapi.com/?apikey=2f6435d9&i=' + ids[0])
    let p2 = axios.get('https://omdbapi.com/?apikey=2f6435d9&i=' + ids[1])
    let p3 = axios.get('https://omdbapi.com/?apikey=2f6435d9&i=' + ids[2])

    return Promise.all([p1, p2, p3])
})
.then(res => console.log(res.map(res => res.data)))