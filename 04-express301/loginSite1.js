const path = require('path')

const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')

const helmet = require('helmet')
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

// app.use(express.static('public '))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
// app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use((req, res, next) => {
  if (req.query.msg === 'fail') {
    res.locals.msg =
      'Sorry, This username and password combination does not exist'
  } else {
    res.locals.msg = ``
  }
  // Send me on to the next piece of middleware
  next()
})

app.get('/', (req, res, next) => {
  res.render('sanity check')
})

app.get('/login', (req, res, next) => {
  // the req object has a query property in Express
  // req.query is an object, with a property of every key in the query string
  // The query string is where you put insecure data
  // console.log(req.query)
  // res.render('login', { msg: 'Hello!' })

  // without middleware
  // const msg = req.query.msg
  // if(msg === 'fail') {
  //   // run some other function
  // }
  res.render('login')
})

app.post('/process_login', (req, res, next) => {
  // req.body is made by urlencoded, which parses the http message for send data!
  const password = req.body.password
  const username = req.body.username
  // check the database to see if the user credentials are valid
  // save username in a cookie
  // if they are valid, send them to the welcome page
  if (password === 'x') {
    // res.cookie takes 2 args:
    // 1. name of the cookie, or name of the variable
    // 2. value to set it to
    res.cookie('username', username)
    // res.direct takes 1 arg:
    // 1. where to send the browser user
    res.redirect('/welcome')
  } else {
    // The "?" is a special character in a URL, it is used to add query parameters
    res.redirect('/login?msg=fail&test=hello')
  }
  // res.json(req.body)
  // res.json('test')
})

app.get('/welcome', (req, res, next) => {
  // res.send('welcome!')
  // req.cookies object will have a property for every
  // named cookie that has been set
  res.render('welcome', {
    username: req.cookies.username,
  })
})

// app.param() - takes 2 args:
// 1. param to look for in the route
// 2. the callback to run (with the usuals)
app.param('id', (req, res, next, id) => {
  console.log('Params called: ', id)
  // res.send(`id is ${id}`)
  // if id has something to do with stories...
  // if id has something to do with blog...
  next()
})

// In a route, anytime something has a : in front it is a wildcard
// wildcard, will match anything in that slot
app.get('/story/:id', (req, res, next) => {
  // the req.params object always exists
  // it will have a property for each wildcard in the route
  res.send(`<h1>Story ${req.params.id}</h1>`)
  // res.send('<h1>Story 1</h1>')
})

// This will never run because it matches above (without next())
// app.get('/story/:blogId/, (req, res, next) => {

app.get('/story/:storyId/:link', (req, res, next) => {
  // the req.params object always exists
  // it will have a property for each wildcard in the route
  res.send(`<h1>Story ${req.params.storyId} - ${req.params.link}</h1>`)
  // res.send('<h1>Story 1</h1>')
})

// Removing a wildcard in the link
// app.get('/story/:storyId/link', (req, res, next) => {

// app.get('/story/1', (req, res, next) => {
//   res.send('<h1>Story 1</h1>')
// })

app.get('/logout', (req, res, next) => {
  // res.clearCookie takes 1 arg:
  // 1. Cookie to clear (by name)
  res.clearCookie('username')
  res.redirect('/login')
})

app.listen(3000)
console.log('Server is running on port 3000')
