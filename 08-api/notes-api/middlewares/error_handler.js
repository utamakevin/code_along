function errorHandler(err, req, res, next) {
    console.log(err)
  
    // the err object has message but it doesn't have the status
    // but would be nice to have both
    const { message, status = 500 } = err
  
    // respond with json
    res.status(500).json({ status, message })
  }


  module.exports = errorHandler