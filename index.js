const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const BlogRoute = require('./routes/BlogRoute')
const app = express()

mongoose.connect(`mongodb://localhost/${process.env.MONGO_DB}`, {
  useNewUrlParser: true
})
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.status(200).send({
    message: "dodo duck"
  })
})

// Routes goes here
app.use(BlogRoute)

const port = process.env.PORT || 3000
app.listen(port, (err) => {
  if(err) throw new Error(err)
  console.log(`running on http://localhost:${port}`);
})
