const express = require("express")
const app = express()
const config = require("./config")
const expressLayouts = require("express-ejs-layouts")
const dishController = require('./controllers/dish_controller.js')

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(expressLayouts)
app.use(express.urlencoded({ extended: true }))
app.use(require("./middlewares/method_override"))


app.get("/", (req, res) => {
  res.render("home")
})


app.use('/dishes', dishController)


app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})
