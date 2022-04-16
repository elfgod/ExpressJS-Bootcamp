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

function validateUser(req, res, next) {
  // ... validate logic
  res.locals.validated = true
  next()
}

app.use(validateUser)

app.get('/about', (req, res, next) => {
  res.render('about', {})
})

app.get('/', (req, res, next) => {
  // The data in the 2nd arg, is going to be appened to res.locals
  res.render('index', {
    msg1: 'success',
    msg2: 'failure',
    // HTML came from the DB and we want to drop it in the template
    html: `<p><img src="data:image/png;base64,https://1.bp.blogspot.com/-FF931kg8Lhk/WXuSvFWuVxI/AAAAAAAAAWQ/ZMgRHMmwcioLXDSkZ5XHW1etUFRK3ua6gCLcBGAs/s1600/goku_super_saiyan_3_dicross_by_nekoar-danagpg.png" /></p>`,
  })
})

app.listen(3000)
console.log('Server is running on port 3000')
