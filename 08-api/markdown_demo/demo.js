const MarkdownIt = require('markdown-it')

const md = new MarkdownIt()

const result = md.render('we **love** css')

console.log(result)