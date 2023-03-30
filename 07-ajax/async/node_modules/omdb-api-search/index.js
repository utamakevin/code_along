const axios = require('axios')

function createClient(apikey) {

  const url = `https://omdbapi.com/?apikey=${apikey}`

  function findOneById(id, cb) {
    let promise =  axios.get(`${url}&i=${id}`)
    return fetchMovie(promise, cb)
  }
  
  function findOneByTitle(title, cb) {
    let promise =  axios.get(`${url}&t=${title}`)
    return fetchMovie(promise, cb)
  }

  function findManyByTitle(title, cb) {
    let promise =  axios.get(`${url}&s=${title}`)
    return fetchMovie(promise, cb)
  }

  function fetchMovie(promise, cb) {
    if (typeof cb === 'function') {
      promise
        .then(res => res.data)
        .then(data => { 
          if (data.Error) {
            throw Error(data.Error)
          } else {
            cb(null, data)
          }
        })
        .catch(err => cb(err, null))    
    } else {
      return promise
        .then(res => res.data)
        .catch(err => {
          if (err.response.data.Error) {
            throw Error(err.response.data.Error)
          }
          throw err
        })
    }
  }
  
  return {
    findOneByTitle,
    findOneById,
    findManyByTitle
  }
}

module.exports = { createClient }