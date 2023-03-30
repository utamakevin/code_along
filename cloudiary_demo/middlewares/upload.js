// require("dotenv").config()
const multer = require("multer")
const cloudinary = require("cloudinary").v2
const { CloudinaryStorage } = require("multer-storage-cloudinary")

cloudinary.config({
    cloud_name: "dewqbedsa",
    api_key: "652158725879687",
    api_secret: "DgbsWZ-nl6uu53D288mJBh8qpuk"
  });

const upload = multer({
    onError: (err, next) => {console.log(err)
        next()},
	storage: new CloudinaryStorage({
		cloudinary: cloudinary,
		params: {
			folder: "cloudinary-tutorial",
		},
	}),
})

module.exports = upload