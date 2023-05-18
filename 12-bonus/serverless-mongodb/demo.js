import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config()

try {
  await mongoose.connect(
    `mongodb+srv://utamakevin:${process.env.MONGO_DB_PASSWORD}@cluster0.za2ecx2.mongodb.net/?retryWrites=true&w=majority`
  )
} catch (err) {
  console.log(err)
}

console.log("mongodb connected")

const burgerSchema = new mongoose.Schema({
  name: String,
  ingredients: Object
})

const Burger = new mongoose.model("Burger", {
  name: {
    type: String,
    unique: true,
    required: [true, "you just gotta have a name buddy"],
  },
  ingredients: [String],
})

const burgers = await Burger.find()

console.log(burgers)

let burger = new Burger({ name: "cheesy burger", ingredients: ["bun", "cheese"] })

try {
  burger.save()
} catch (err) {
  console.log(err)
}

mongoose.disconnect()