const toQuery = require('./to_query.js')

it.skip('should return an object with 3 key value pairs', () => {
    expect(
        toQuery('http://omdbapi.com/?t=jaws&apikey=123456&page=5')
        ).toEqual({
            t: "jaws",
            apikey: "123456",
            page: "5"
        })
})