const toSentence = require('./toSentence.js')

test.skip('3 elements', () => {
    let actual = toSentence(['mango', 'kiwi', 'banana'])
    let expected = "mango, kiwi and banana"
    expect(actual).toBe(expected)
})

test.skip('0 elements should return empty string', () => {

    expect(toSentence([])).toBe('')
})

test.skip('2 elements should return elements with and in between', () => {
    let actual = toSentence(['apple', 'mango'])
    let expected = 'apple and mango'

    expect(toSentence(['apple', 'mango'])).toBe('apple and mango')
    expect(toSentence(['kiwi', 'watermelon'])).toBe('kiwi and watermelon')
})

test.skip('numbers also works', () => {
    expect(toSentence([1, 2, 3])).toBe('1, 2 and 3')
    expect(toSentence([10, 20, 30])).toBe('10, 20 and 30')
})

test.skip('4 elements', () => {
    expect(toSentence(['apple', 'mango', 'kiwi', 'orange'])
    ).toBe(
        'apple, mango, kiwi and orange'
    )
})

test.skip('one element should return the element', () => {
    expect(toSentence(['kiwi'])).toBe('kiwi')
})

test.skip('calling toSentence twice with same array', () => {
    let fruits = ['kiwi', 'mango', 'banana', 'orange']
    expect(toSentence(fruits)).toBe('kiwi, mango, banana and orange')
    expect(toSentence(fruits)).toBe('kiwi, mango, banana and orange')
})