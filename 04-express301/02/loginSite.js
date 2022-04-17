const path = require('path')

const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')

const helmet = require('helmet')
const { fileURLToPath } = require('url')
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

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
  next()
})

app.get('/', (req, res, next) => {
  res.render('sanity check')
})

app.get('/login', (req, res, next) => {
  res.render('login')
})

app.post('/process_login', (req, res, next) => {
  const password = req.body.password
  const username = req.body.username
  if (password === 'x') {
    res.cookie('username', username)
    res.redirect('/welcome')
  } else {
    res.redirect('/login?msg=fail&test=hello')
  }
})

app.get('/welcome', (req, res, next) => {
  res.render('welcome', {
    username: req.cookies.username,
  })
})

app.param('id', (req, res, next, id) => {
  console.log('Params called: ', id)
  next()
})

app.get('/story/:id', (req, res, next) => {
  res.send(`<h1>Story ${req.params.id}</h1>`)
})

app.get('/story/:storyId/:link', (req, res, next) => {
  res.send(`<h1>Story ${req.params.storyId} - ${req.params.link}</h1>`)
})

app.get('/logout', (req, res, next) => {
  res.clearCookie('username')
  res.redirect('/login')
})

app.get('/statement', (req, res, next) => {
  // res.send('sanity check statement')

  // This will render the statement in the browser
  // res.sendFile(path.join(__dirname, 'userStatements/BankStatementChequing.png'))

  // app has a download method! Takes 2 args:
  // 1. filename
  // 2. optionally, what you want the file to download as
  // 3. callbak which comes with the error

  // res.download(path.join(__dirname, 'userStatements/BankStatementChequing.png'))
  // download is setting the headers
  // 1. content-disposition to attachment,with a file name of the 2nd arg
  const BankDate = new Date() // this is just an idea to add a name to the file
  res.download(
    path.join(__dirname, 'userStatements/BankStatementChequing.png'),
    BankDate.png
  )

  // with callback
  // res.download(
  //   path.join(__dirname, 'userStatements/BankStatementChequing.png'),
  //   BankDate.png,
  //   // if there is an error in sending the File, headers may already be sent
  //   (err) => {
  //     if (err) {
  //   //  res.headersSent is a bool, true if headers are already sent
  //       if (!res.headersSent) {
  //       res.redirect('/download/error')
  //     } else {
  //       console.log('Downloaded')
  //     }
  //   }
  // )

  // attachment ONLY sets the headers for content-disposition
  // IF, you provide a fileURLToPath, it will also set the file of the 2nd arg
  // res.attachment(path.join(__dirname, 'userStatements/BankStatementChequing.png'))

  // // This is manually setting the headers
  // res.set(
  //   'Content-Disposition',
  //   'attachment; filename=BankStatementChequing.png'
  // )
  // res.sendFile(path.join(__dirname, 'userStatements/BankStatementChequing.png'))
})

app.listen(3000)
console.log('Server is running on port 3000')
