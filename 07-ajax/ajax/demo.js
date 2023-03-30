console.log('ajax')

// three ways to make a request in the browser
// - address bar
// - link - anchor
// - form

// these processes are synchronous

// another way to make a request is using javascript - the nature is async (by default) - called AJAX

// AJAX - asynchronous javascript xml

// ----------------------------------------------------------------
// calling used to be like this 

// let req = new XMLHttpRequest()
// req.addEventListener('load', () => {
//     console.log(req.responseText)
// })

// req.open('GET', 'https://epoch.github.io/guessing_game/index.html')
// req.send()

// ----------------------------------------------------------------

// now we can use fetch (api from new browsers)

// const url = 'https://api.ipify.org?format=json'


// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))

// promiseState - pending, fulfilled, rejected


// ----------------------------------------------------------------

// EXERCISE:
// make a request to omdb api and search for jaws
// loop through each movie and console log the title
// using fetch

    // fetch('https://www.omdbapi.com/?apikey=2f6435d9&s=jaws')
    //     .then(res => res.json())
    //     .then(data => {
        //         data.Search.forEach(movie => console.log(movie.Title))
    //     })
    


// ----------------------------------------------------------------

// EXERCISE:
// now list the titles after searching on the search bar


// const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')
const form = document.querySelector('form')


function handleSearch(e) {
    e.preventDefault() // client side js is taking over
    fetch(`https://www.omdbapi.com/?apikey=2f6435d9&s=${input.value}`)
    .then(res => res.json())
    .then(data => {
        div.innerHTML = ''
        data.Search.forEach(movie => {
            // console.log(movie.Title)
            let p = document.createElement('p')
            p.textContent = movie.Title
            div.appendChild(p)
        })
    })
}

// function handleClick() {
//     fetch(`https://www.omdbapi.com/?apikey=2f6435d9&s=${input.value}`)
//     .then(res => res.json())
//     .then(data => {
//         data.Search.forEach(movie => {
//             console.log(movie.Title)
            
//         let p = document.createElement('p')
//         p.textContent = movie.Title
//         div.appendChild(p)


//         })
//     })
// } 


// button.addEventListener('click', handleClick)
form.addEventListener('submit', handleSearch)