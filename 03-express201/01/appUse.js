const express = require('express')
const app = express()

// Express = 2 things
// 1. Router
// 2. Middleware that comprises a webframework

// Req ----MIDDLEWARE---- Res
// Middleware function is ANY function that has access
// to the req, res, next object

// Req ----MIDDLEWARE---- Res
// 1. Request comes in
// 2. We need to validate the user, sometimes
// 3. We need to store some things in the database
// 4. If there is data from the user we need to parse it and store it
// 5. Response how ever we need to send it back

function validateUser(req, res, next) {
  // get info out of the req object
  // do some stuff with the DB
  res.locals.validated = true
  console.log('VALIDATED RAN!')
  next()
}

// Next() tells the function after ending to jump to the next middleware
// If no next() is called at the end of the func, no more middleware will run

// app.use(validateUser)
// This MD will run only in the route /admin
// This will run validateUser on ALL paths, all methods!
app.use(validateUser)
// This will run validateUser on /admin, all methods!
app.use('/admin', validateUser)
// This will run validateUser on /, only on get methods!
// and by the way it looks like this
app.get('/', validateUser)
app.get('/', (req, res, next) => {
  res.locals.validated = true
  console.log('VALIDATED RAN!')
  next()
})

app.get('/', (req, res, next) => {
  res.send('<h1>Main Page</h1>')
  // console.log(res.locals.validated)
})

// This will run validateUser on /, only on get methods! and,
app.get('/admin', (req, res, next) => {
  res.send('<h1>Admin Page</h1>')
  console.log(res.locals.validated)
})

app.listen(3000)
