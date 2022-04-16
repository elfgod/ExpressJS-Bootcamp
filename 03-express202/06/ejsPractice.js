const path = require('path')

const express = require('express')
const app = express()

const helmet = require('helmet')
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

app.use(express.static('public '))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// 4. We pass that res.render 2 things:
// - the file we want to use
// - the data we want to pass to the view
// 5. Express uses the node module for our specified view engine and parses the file
// - that MediaSession, it takes de HTML, JS, CSS and combines it with whatever "node" there is in the file
// 6. the final resulf of this proceess is a compiled product of the things the browser can read
// - HTML, CSS, JS

app.get('/', (req, res, next) => {
  res.render('index')
})

app.listen(3000)
console.log('Server is running on port 3000')
