const path = require('path')

const express = require('express')
const app = express()

const helmet = require('helmet')
app.use(helmet())

// serve up static files
app.use(express.static('public '))
// parse json and urlencoded data into req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.set(), takes 2 args:
// 1. key
// 2. value
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// 1. Express as we know it happens. This File
// 2. We define a view engine:
// - EJS
// - Mustache
// - Handlebars
// - Jade/Pug
// 3. Inside one of our routes, we have a res.render
// 4. We pass that res.render 2 things:
// - the file we want to use
// - the data we want to pass to the view
// 5. Express uses the node module for our specified view engine and parses the file
// - that MediaSession, it takes de HTML, JS, CSS and combines it with whatever "node" there is in the file
// 6. the final resulf of this proceess is a compiled product of the things the browser can read
// - HTML, CSS, JS

app.get('/', (req, res, next) => {
  // res.json({
  //   msg: 'success',
  // })

  // res.send('hello world')

  res.render('index')
})

app.listen(3000)
console.log('Server is running on port 3000')
