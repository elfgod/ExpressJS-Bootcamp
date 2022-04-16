const path = require('path')

const express = require('express')
const app = express()

const helmet = require('helmet')
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

// const hbs = require('hbs')
// hbs.registerPartials(__dirname + '/views/partials')

// serve up static files
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'viewsPUG'))

function validateUser(req, res, next) {
  // ... validated logic
  res.locals.validated = true
  next()
}

app.use(validateUser)

app.get('/about', (req, res, next) => {
  res.render('about', {})
})

app.get('/', (req, res, next) => {
  res.render('index', {
    countries: [
      {
        name: 'Russia',
        capital: 'Moscow',
        western: false,
      },
      {
        name: 'England',
        capital: 'London',
        western: true,
      },
    ],
    msg: 'Failure!',
    msg2: 'Success!',
    html: `<p><img src="data:image/png;base64,https://1.bp.blogspot.com/-FF931kg8Lhk/WXuSvFWuVxI/AAAAAAAAAWQ/ZMgRHMmwcioLXDSkZ5XHW1etUFRK3ua6gCLcBGAs/s1600/goku_super_saiyan_3_dicross_by_nekoar-danagpg.png" /></p>`,
  })
})

app.listen(3000)
