// express.Router()

const express = require('express')
const app = express()

const helmet = require('helmet')
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

app.use(express.urlencoded())
app.use(express.json())
app.use(express.static('public'))

const router = require('./theRouter')
const userRouter = require('./userRouter')
app.use('/', router)
app.use('/user', userRouter)

app.listen(3000)
console.log('Server is running on port 3000')
