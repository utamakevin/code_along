const User = require('../models/user')

// user model

User.create('dt@ga.co', 'pudding')
    .then(res => console.log(res.rows[0]))
    .catch(err => console.log(err))
    