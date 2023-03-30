// function validateNewNote() {
//     // try using validation library joi
//     // cannot be empty
//     // need at least 2 characters
//   }

const Joi = require('joi')
const AppError = require('../lib/app_error.js')


const schema = Joi.object({
  content: Joi.string()
  .min(2)
  .required(),
})

function validateNewNote(req, res, next) {
  const { value, error } = schema.validate({ content: req.body.content })

  if(error) {
    throw new AppError(400, error.message)
  }
  
    next()
}


module.exports = validateNewNote


// if we are building the function from scratch
  // function validateNewNote(req, res, next) {
  //   const { content } = req.body

  //   if(content.trim === '') {
  //     throw new AppError(400, 'content cannot be empty')
  //   }
  // }