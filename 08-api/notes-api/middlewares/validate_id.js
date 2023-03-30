const AppError = require('../lib/app_error.js')

function validateId(req, res, next) {
    const { id } = req.params
  
    // insead of if statements use joi
    if(/[^\d]/.test(id)) {
      throw new AppError(400, 'id needs to be an integer')
    }
  
    next()
  }

  
module.exports = validateId