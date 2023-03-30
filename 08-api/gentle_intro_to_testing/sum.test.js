const sum = require('./sum.js')

test.skip('adding 1 + 2 should return 3', () => {

    // assertion
    let actual = sum(1, 2)
    let expected = 3

    expect(actual).toBe(expected)

})