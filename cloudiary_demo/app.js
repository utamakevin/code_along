const express = require("express")
const app = express()
const PORT = 3000
const upload = require("./middlewares/upload")
let lastUpload = ""

app.get("/", (req, res) => {
	res.render("form.ejs", { lastUpload })
})

app.post("/file", upload.single("uploadedFile"), (req, res) => {
	// console.log('hello' + typeof req)
    res.send('hello')
})

app.use((err, req, res, next) => {
    console.log(err)
})

app.listen(PORT, () => {
	console.log("Listening on port:", PORT)
})