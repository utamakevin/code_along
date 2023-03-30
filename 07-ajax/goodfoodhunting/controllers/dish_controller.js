const { Router } = require('express')
const db = require('../db')
const router = Router()
const Dish = require('./dish.js')




router.get('/', (req, res) => {
  Dish.all()
  .then(dbRes => res.render('all_dishes', { dishes: dbRes.rows }))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  Dish.findById(req.params.id)
    .then(dish => res.render('dish_details', { dish }))
    .catch(next) // .catch(err => next(err))
})


module.exports = router